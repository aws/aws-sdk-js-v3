import { RequestContext } from "@aws-sdk/types";
import { ConnectConfiguration } from "@aws-sdk/types/src/connection/config";
import { ConnectionManager, ConnectionManagerConfiguration } from "@aws-sdk/types/src/connection/manager";
import http2, { ClientHttp2Session } from "http2";

import { NodeHttp2ConnectionPool } from "./node-http2-connection-pool";

export class NodeHttp2ConnectionManager implements ConnectionManager<ClientHttp2Session> {
  constructor(config: ConnectionManagerConfiguration) {
    this.config = config;

    if (this.config.maxConcurrency && this.config.maxConcurrency <= 0) {
      throw new RangeError("maxConcurrency must be greater than zero.");
    }
  }

  private config: ConnectionManagerConfiguration;

  private readonly sessionCache: Map<string, NodeHttp2ConnectionPool> = new Map<string, NodeHttp2ConnectionPool>();

  public lease(requestContext: RequestContext, connectionConfiguration: ConnectConfiguration): ClientHttp2Session {
    const url = this.getUrlString(requestContext);

    const existingPool = this.sessionCache.get(url);

    if (existingPool) {
      const existingSession = existingPool.poll();
      if (existingSession && !this.config.disableConcurrency) {
        return existingSession;
      }
    }

    const session = http2.connect(url);

    if (this.config.maxConcurrency) {
      session.settings({ maxConcurrentStreams: this.config.maxConcurrency }, (err) => {
        if (err) {
          throw new Error(
            "Fail to set maxConcurrentStreams to " +
              this.config.maxConcurrency +
              "when creating new session for " +
              requestContext.destination.toString()
          );
        }
      });
    }

    // AWS SDK does not expect server push streams, don't keep node alive without a request.
    session.unref();

    const destroySessionCb = () => {
      session.destroy();
      this.deleteSession(url, session);
    };
    session.on("goaway", destroySessionCb);
    session.on("error", destroySessionCb);
    session.on("frameError", destroySessionCb);
    session.on("close", () => this.deleteSession(url, session));

    if (connectionConfiguration.requestTimeout) {
      session.setTimeout(connectionConfiguration.requestTimeout, destroySessionCb);
    }

    const connectionPool = this.sessionCache.get(url) || new NodeHttp2ConnectionPool();

    connectionPool.offerLast(session);

    this.sessionCache.set(url, connectionPool);

    return session;
  }

  /**
   * Delete a session from the connection pool.
   * @param authority The authority of the session to delete.
   * @param session The session to delete.
   */
  public deleteSession(authority: string, session: ClientHttp2Session): void {
    const existingConnectionPool = this.sessionCache.get(authority);

    if (!existingConnectionPool) {
      return;
    }

    if (!existingConnectionPool.contains(session)) {
      return;
    }

    existingConnectionPool.remove(session);

    this.sessionCache.set(authority, existingConnectionPool);
  }

  public release(requestContext: RequestContext, session: ClientHttp2Session): void {
    const cacheKey = this.getUrlString(requestContext);
    this.sessionCache.get(cacheKey)?.offerLast(session);
  }

  public destroy(): void {
    for (const [key, connectionPool] of this.sessionCache) {
      for (const session of connectionPool) {
        if (!session.destroyed) {
          session.destroy();
        }
        connectionPool.remove(session);
      }
      this.sessionCache.delete(key);
    }
  }

  public setMaxConcurrentStreams(maxConcurrentStreams: number) {
    if (this.config.maxConcurrency && this.config.maxConcurrency <= 0) {
      throw new RangeError("maxConcurrentStreams must be greater than zero.");
    }
    this.config.maxConcurrency = maxConcurrentStreams;
  }

  public setDisableConcurrentStreams(disableConcurrentStreams: boolean) {
    this.config.disableConcurrency = disableConcurrentStreams;
  }

  private getUrlString(request: RequestContext): string {
    return request.destination.toString();
  }
}
