// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import { GetMediaCommand, GetMediaCommandInput, GetMediaCommandOutput } from "./commands/GetMediaCommand";
import { KinesisVideoMediaClient, KinesisVideoMediaClientConfig } from "./KinesisVideoMediaClient";

const commands = {
  GetMediaCommand,
};

export interface KinesisVideoMedia {
  /**
   * @see {@link GetMediaCommand}
   */
  getMedia(args: GetMediaCommandInput, options?: __HttpHandlerOptions): Promise<GetMediaCommandOutput>;
  getMedia(args: GetMediaCommandInput, cb: (err: any, data?: GetMediaCommandOutput) => void): void;
  getMedia(
    args: GetMediaCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetMediaCommandOutput) => void
  ): void;
}

/**
 * @public
 * <p></p>
 */
export class KinesisVideoMedia extends KinesisVideoMediaClient implements KinesisVideoMedia {}
createAggregatedClient(commands, KinesisVideoMedia);
