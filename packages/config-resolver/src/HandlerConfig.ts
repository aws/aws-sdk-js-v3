import { RequestHandler } from "@aws-sdk/types";

export function destroyRequestHandlerConfig(config: {
  requestHandler: RequestHandler<any, any, any>;
}): void {
  if (config.requestHandler.destroy) config.requestHandler.destroy();
}
