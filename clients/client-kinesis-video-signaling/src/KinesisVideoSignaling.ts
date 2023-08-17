// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import {
  GetIceServerConfigCommand,
  GetIceServerConfigCommandInput,
  GetIceServerConfigCommandOutput,
} from "./commands/GetIceServerConfigCommand";
import {
  SendAlexaOfferToMasterCommand,
  SendAlexaOfferToMasterCommandInput,
  SendAlexaOfferToMasterCommandOutput,
} from "./commands/SendAlexaOfferToMasterCommand";
import { KinesisVideoSignalingClient, KinesisVideoSignalingClientConfig } from "./KinesisVideoSignalingClient";

const commands = {
  GetIceServerConfigCommand,
  SendAlexaOfferToMasterCommand,
};

export interface KinesisVideoSignaling {
  /**
   * @see {@link GetIceServerConfigCommand}
   */
  getIceServerConfig(
    args: GetIceServerConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetIceServerConfigCommandOutput>;
  getIceServerConfig(
    args: GetIceServerConfigCommandInput,
    cb: (err: any, data?: GetIceServerConfigCommandOutput) => void
  ): void;
  getIceServerConfig(
    args: GetIceServerConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetIceServerConfigCommandOutput) => void
  ): void;

  /**
   * @see {@link SendAlexaOfferToMasterCommand}
   */
  sendAlexaOfferToMaster(
    args: SendAlexaOfferToMasterCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SendAlexaOfferToMasterCommandOutput>;
  sendAlexaOfferToMaster(
    args: SendAlexaOfferToMasterCommandInput,
    cb: (err: any, data?: SendAlexaOfferToMasterCommandOutput) => void
  ): void;
  sendAlexaOfferToMaster(
    args: SendAlexaOfferToMasterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SendAlexaOfferToMasterCommandOutput) => void
  ): void;
}

/**
 * @public
 * <p>Kinesis Video Streams Signaling Service is a intermediate service that establishes a
 *             communication channel for discovering peers, transmitting offers and answers in order to
 *             establish peer-to-peer connection in webRTC technology.</p>
 */
export class KinesisVideoSignaling extends KinesisVideoSignalingClient implements KinesisVideoSignaling {}
createAggregatedClient(commands, KinesisVideoSignaling);
