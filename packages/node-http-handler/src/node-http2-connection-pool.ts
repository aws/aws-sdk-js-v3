import { ConnectionPool } from "@aws-sdk/types/src/connection/pool";
import { ClientHttp2Session } from "http2";

export class NodeHttp2ConnectionPool implements ConnectionPool<ClientHttp2Session> {
  private sessions: ClientHttp2Session[] = [];

  constructor(sessions?: ClientHttp2Session[]) {
    this.sessions = sessions ?? [];
  }

  public poll(): ClientHttp2Session | void {
    if (this.sessions.length > 0) {
      return this.sessions.shift();
    }
  }

  public offerLast(session: ClientHttp2Session): void {
    this.sessions.push(session);
  }

  public contains(session: ClientHttp2Session): boolean {
    return this.sessions.includes(session);
  }

  public remove(session: ClientHttp2Session): void {
    this.sessions = this.sessions.filter((s) => s !== session);
  }

  public [Symbol.iterator]() {
    return this.sessions[Symbol.iterator]();
  }

  public destroy(connection: ClientHttp2Session): void {
    for (const session of this.sessions) {
      if (session === connection) {
        if (!session.destroyed) {
          session.destroy();
        }
      }
    }
  }
}
