// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/core/client";
import type { HttpHandlerOptions as __HttpHandlerOptions, MetricsRecorder as __MetricsRecorder } from "@smithy/types";

import {
  type StartFaceLivenessSessionCommandInput,
  type StartFaceLivenessSessionCommandOutput,
  StartFaceLivenessSessionCommand,
} from "./commands/StartFaceLivenessSessionCommand";
import { RekognitionStreamingClient } from "./RekognitionStreamingClient";

const commands = {
  StartFaceLivenessSessionCommand,
};

/**
 * @public
 */
export interface RekognitionStreamingRequestOptions extends __HttpHandlerOptions {
  metricsRecorder?: __MetricsRecorder<unknown>;
}

export interface RekognitionStreaming {
  /**
   * @see {@link StartFaceLivenessSessionCommand}
   */
  startFaceLivenessSession(
    args: StartFaceLivenessSessionCommandInput,
    options?: RekognitionStreamingRequestOptions
  ): Promise<StartFaceLivenessSessionCommandOutput>;
  startFaceLivenessSession(
    args: StartFaceLivenessSessionCommandInput,
    cb: (err: any, data?: StartFaceLivenessSessionCommandOutput) => void
  ): void;
  startFaceLivenessSession(
    args: StartFaceLivenessSessionCommandInput,
    options: RekognitionStreamingRequestOptions,
    cb: (err: any, data?: StartFaceLivenessSessionCommandOutput) => void
  ): void;
}

/**
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
 * @public
 */
export class RekognitionStreaming extends RekognitionStreamingClient implements RekognitionStreaming {}
createAggregatedClient(commands, RekognitionStreaming);
