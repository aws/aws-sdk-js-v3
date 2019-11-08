import { TransferHandler } from "@aws-sdk/types";

export function destroyTransferHandlerConfig(config: {
  transferHandler: TransferHandler<any, any, any>;
}): void {
  if (config.transferHandler.destroy) config.transferHandler.destroy();
}
