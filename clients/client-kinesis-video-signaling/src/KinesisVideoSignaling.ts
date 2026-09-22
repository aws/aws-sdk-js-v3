// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/core/client";
import type { HttpHandlerOptions as __HttpHandlerOptions, MetricsRecorder as __MetricsRecorder } from "@smithy/types";

import {
  type GetIceServerConfigCommandInput,
  type GetIceServerConfigCommandOutput,
  GetIceServerConfigCommand,
} from "./commands/GetIceServerConfigCommand";
import {
  type SendAlexaOfferToMasterCommandInput,
  type SendAlexaOfferToMasterCommandOutput,
  SendAlexaOfferToMasterCommand,
} from "./commands/SendAlexaOfferToMasterCommand";
import { KinesisVideoSignalingClient } from "./KinesisVideoSignalingClient";

const commands = {
  GetIceServerConfigCommand,
  SendAlexaOfferToMasterCommand,
};

/**
 * @public
 */
export interface KinesisVideoSignalingRequestOptions extends __HttpHandlerOptions {
  metricsRecorder?: __MetricsRecorder<unknown>;
}

export interface KinesisVideoSignaling {
  /**
   * @see {@link GetIceServerConfigCommand}
   */
  getIceServerConfig(
    args: GetIceServerConfigCommandInput,
    options?: KinesisVideoSignalingRequestOptions
  ): Promise<GetIceServerConfigCommandOutput>;
  getIceServerConfig(
    args: GetIceServerConfigCommandInput,
    cb: (err: any, data?: GetIceServerConfigCommandOutput) => void
  ): void;
  getIceServerConfig(
    args: GetIceServerConfigCommandInput,
    options: KinesisVideoSignalingRequestOptions,
    cb: (err: any, data?: GetIceServerConfigCommandOutput) => void
  ): void;

  /**
   * @see {@link SendAlexaOfferToMasterCommand}
   */
  sendAlexaOfferToMaster(
    args: SendAlexaOfferToMasterCommandInput,
    options?: KinesisVideoSignalingRequestOptions
  ): Promise<SendAlexaOfferToMasterCommandOutput>;
  sendAlexaOfferToMaster(
    args: SendAlexaOfferToMasterCommandInput,
    cb: (err: any, data?: SendAlexaOfferToMasterCommandOutput) => void
  ): void;
  sendAlexaOfferToMaster(
    args: SendAlexaOfferToMasterCommandInput,
    options: KinesisVideoSignalingRequestOptions,
    cb: (err: any, data?: SendAlexaOfferToMasterCommandOutput) => void
  ): void;
}

/**
 * <p>Kinesis Video Streams Signaling Service is a intermediate service that establishes a
 *             communication channel for discovering peers, transmitting offers and answers in order to
 *             establish peer-to-peer connection in webRTC technology.</p>
 * @public
 */
export class KinesisVideoSignaling extends KinesisVideoSignalingClient implements KinesisVideoSignaling {}
createAggregatedClient(commands, KinesisVideoSignaling);
