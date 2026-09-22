// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/core/client";
import type { HttpHandlerOptions as __HttpHandlerOptions, MetricsRecorder as __MetricsRecorder } from "@smithy/types";

import { type GetMediaCommandInput, type GetMediaCommandOutput, GetMediaCommand } from "./commands/GetMediaCommand";
import { KinesisVideoMediaClient } from "./KinesisVideoMediaClient";

const commands = {
  GetMediaCommand,
};

/**
 * @public
 */
export interface KinesisVideoMediaRequestOptions extends __HttpHandlerOptions {
  metricsRecorder?: __MetricsRecorder<unknown>;
}

export interface KinesisVideoMedia {
  /**
   * @see {@link GetMediaCommand}
   */
  getMedia(
    args: GetMediaCommandInput,
    options?: KinesisVideoMediaRequestOptions
  ): Promise<GetMediaCommandOutput>;
  getMedia(
    args: GetMediaCommandInput,
    cb: (err: any, data?: GetMediaCommandOutput) => void
  ): void;
  getMedia(
    args: GetMediaCommandInput,
    options: KinesisVideoMediaRequestOptions,
    cb: (err: any, data?: GetMediaCommandOutput) => void
  ): void;
}

/**
 * <p></p>
 * @public
 */
export class KinesisVideoMedia extends KinesisVideoMediaClient implements KinesisVideoMedia {}
createAggregatedClient(commands, KinesisVideoMedia);
