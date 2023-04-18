// smithy-typescript generated code
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

import {
  StartFaceLivenessSessionCommand,
  StartFaceLivenessSessionCommandInput,
  StartFaceLivenessSessionCommandOutput,
} from "./commands/StartFaceLivenessSessionCommand";
import { RekognitionStreamingClient } from "./RekognitionStreamingClient";

/**
 * @public
 * <p>A real-time video processing service based on Rekognition. This section documents the API
 *       operations for Rekognition Face Liveness.</p>
 *          <p>
 *             <b>Amazon Rekognition Face Liveness</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/rekognition/latest/APIReference/API_CreateFaceLivenessSession.html">CreateFaceLivenessSession</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/rekognition/latest/APIReference/API_GetFaceLivenessSessionResults.html">GetFaceLivenessSessionResults</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/rekognition/latest/APIReference/API_rekognitionstreaming_StartFaceLivenessSession.html">StartFaceLivenessSession</a>
 *                </p>
 *             </li>
 *          </ul>
 */
export class RekognitionStreaming extends RekognitionStreamingClient {
  /**
   * @public
   * <p>Starts a Face Liveness video stream and liveness detection process for a given
   *       session.</p>
   *          <p>Requires <code>sessionId</code>, <code>ChallengeVersions</code>, <code>VideoWidth</code>,
   *         <code>VideoHeight</code> and a <code>RequestEventStream</code> as input. The event stream
   *       contains information about different events for the session, including the challenge
   *       information used for verification. </p>
   *          <p>The maximum video size for Face Liveness is 10 MB. Face Liveness throws a
   *         <code>ValidationException</code> if the video does not match the necessary formatting and
   *       size parameters. </p>
   */
  public startFaceLivenessSession(
    args: StartFaceLivenessSessionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartFaceLivenessSessionCommandOutput>;
  public startFaceLivenessSession(
    args: StartFaceLivenessSessionCommandInput,
    cb: (err: any, data?: StartFaceLivenessSessionCommandOutput) => void
  ): void;
  public startFaceLivenessSession(
    args: StartFaceLivenessSessionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartFaceLivenessSessionCommandOutput) => void
  ): void;
  public startFaceLivenessSession(
    args: StartFaceLivenessSessionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StartFaceLivenessSessionCommandOutput) => void),
    cb?: (err: any, data?: StartFaceLivenessSessionCommandOutput) => void
  ): Promise<StartFaceLivenessSessionCommandOutput> | void {
    const command = new StartFaceLivenessSessionCommand(args);
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
