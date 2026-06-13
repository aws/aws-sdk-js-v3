/**
 * Browser stub for worker-http-handler.
 * Worker threads are not available in browser environments.
 * @internal
 */

export type DataSource = any;

export function defaultWorkerCount(): number {
  return 1;
}

export function createEmptyReadable(): any {
  throw new Error("WorkerHttpHandler is not supported in browser environments.");
}

export class WorkerHttpHandler {
  constructor() {
    throw new Error("WorkerHttpHandler is not supported in browser environments.");
  }
  async handle(): Promise<any> {
    throw new Error("WorkerHttpHandler is not supported in browser environments.");
  }
  updateHttpClientConfig(): void {}
  httpHandlerConfigs(): Record<string, unknown> {
    return {};
  }
  destroy(): void {}
}
