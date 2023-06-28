// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import {
  StartFaceLivenessSessionCommand,
  StartFaceLivenessSessionCommandInput,
  StartFaceLivenessSessionCommandOutput,
} from "./commands/StartFaceLivenessSessionCommand";
import { RekognitionStreamingClient, RekognitionStreamingClientConfig } from "./RekognitionStreamingClient";

const commands = {
  StartFaceLivenessSessionCommand,
};

export interface RekognitionStreaming {
  /**
   * @see {@link StartFaceLivenessSessionCommand}
   */
  startFaceLivenessSession(
    args: StartFaceLivenessSessionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartFaceLivenessSessionCommandOutput>;
  startFaceLivenessSession(
    args: StartFaceLivenessSessionCommandInput,
    cb: (err: any, data?: StartFaceLivenessSessionCommandOutput) => void
  ): void;
  startFaceLivenessSession(
    args: StartFaceLivenessSessionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartFaceLivenessSessionCommandOutput) => void
  ): void;
}

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
export class RekognitionStreaming extends RekognitionStreamingClient implements RekognitionStreaming {}
createAggregatedClient(commands, RekognitionStreaming);
