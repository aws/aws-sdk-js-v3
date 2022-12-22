// smithy-typescript generated code
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

import {
  JoinStorageSessionCommand,
  JoinStorageSessionCommandInput,
  JoinStorageSessionCommandOutput,
} from "./commands/JoinStorageSessionCommand";
import { KinesisVideoWebRTCStorageClient } from "./KinesisVideoWebRTCStorageClient";

/**
 * <p>
 *     </p>
 */
export class KinesisVideoWebRTCStorage extends KinesisVideoWebRTCStorageClient {
  /**
   * <p>
   *       Join the ongoing one way-video and/or multi-way audio WebRTC session as
   *       a video producing device for an input channel. If there’s no existing
   *       session for the channel, a new streaming session needs to be created, and the
   *       Amazon Resource Name (ARN) of the signaling channel must be provided.
   *     </p>
   *          <p>Currently for the <code>SINGLE_MASTER</code> type, a video producing
   *       device is able to ingest both audio and video media into a stream,
   *       while viewers can only ingest audio. Both a video producing device
   *       and viewers can join the session first, and wait for other participants.</p>
   *          <p>While participants are having peer to peer conversations through webRTC,
   *       the ingested media session will be stored into the Kinesis Video Stream.
   *       Multiple viewers are able to playback real-time media.</p>
   *          <p>Customers can also use existing Kinesis Video Streams features like
   *       <code>HLS</code> or <code>DASH</code> playback, Image generation, and more
   *       with ingested WebRTC media.</p>
   *          <note>
   *             <p>Assume that only one video producing device client
   *       can be associated with a session for the channel. If more than one
   *       client joins the session of a specific channel as a video producing device,
   *       the most recent client request takes precedence. </p>
   *          </note>
   */
  public joinStorageSession(
    args: JoinStorageSessionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<JoinStorageSessionCommandOutput>;
  public joinStorageSession(
    args: JoinStorageSessionCommandInput,
    cb: (err: any, data?: JoinStorageSessionCommandOutput) => void
  ): void;
  public joinStorageSession(
    args: JoinStorageSessionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: JoinStorageSessionCommandOutput) => void
  ): void;
  public joinStorageSession(
    args: JoinStorageSessionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: JoinStorageSessionCommandOutput) => void),
    cb?: (err: any, data?: JoinStorageSessionCommandOutput) => void
  ): Promise<JoinStorageSessionCommandOutput> | void {
    const command = new JoinStorageSessionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
}
