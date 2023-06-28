// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import {
  StartCallAnalyticsStreamTranscriptionCommand,
  StartCallAnalyticsStreamTranscriptionCommandInput,
  StartCallAnalyticsStreamTranscriptionCommandOutput,
} from "./commands/StartCallAnalyticsStreamTranscriptionCommand";
import {
  StartMedicalStreamTranscriptionCommand,
  StartMedicalStreamTranscriptionCommandInput,
  StartMedicalStreamTranscriptionCommandOutput,
} from "./commands/StartMedicalStreamTranscriptionCommand";
import {
  StartStreamTranscriptionCommand,
  StartStreamTranscriptionCommandInput,
  StartStreamTranscriptionCommandOutput,
} from "./commands/StartStreamTranscriptionCommand";
import { TranscribeStreamingClient, TranscribeStreamingClientConfig } from "./TranscribeStreamingClient";

const commands = {
  StartCallAnalyticsStreamTranscriptionCommand,
  StartMedicalStreamTranscriptionCommand,
  StartStreamTranscriptionCommand,
};

export interface TranscribeStreaming {
  /**
   * @see {@link StartCallAnalyticsStreamTranscriptionCommand}
   */
  startCallAnalyticsStreamTranscription(
    args: StartCallAnalyticsStreamTranscriptionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartCallAnalyticsStreamTranscriptionCommandOutput>;
  startCallAnalyticsStreamTranscription(
    args: StartCallAnalyticsStreamTranscriptionCommandInput,
    cb: (err: any, data?: StartCallAnalyticsStreamTranscriptionCommandOutput) => void
  ): void;
  startCallAnalyticsStreamTranscription(
    args: StartCallAnalyticsStreamTranscriptionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartCallAnalyticsStreamTranscriptionCommandOutput) => void
  ): void;

  /**
   * @see {@link StartMedicalStreamTranscriptionCommand}
   */
  startMedicalStreamTranscription(
    args: StartMedicalStreamTranscriptionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartMedicalStreamTranscriptionCommandOutput>;
  startMedicalStreamTranscription(
    args: StartMedicalStreamTranscriptionCommandInput,
    cb: (err: any, data?: StartMedicalStreamTranscriptionCommandOutput) => void
  ): void;
  startMedicalStreamTranscription(
    args: StartMedicalStreamTranscriptionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartMedicalStreamTranscriptionCommandOutput) => void
  ): void;

  /**
   * @see {@link StartStreamTranscriptionCommand}
   */
  startStreamTranscription(
    args: StartStreamTranscriptionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartStreamTranscriptionCommandOutput>;
  startStreamTranscription(
    args: StartStreamTranscriptionCommandInput,
    cb: (err: any, data?: StartStreamTranscriptionCommandOutput) => void
  ): void;
  startStreamTranscription(
    args: StartStreamTranscriptionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartStreamTranscriptionCommandOutput) => void
  ): void;
}

/**
 * @public
 * <p>Amazon Transcribe streaming offers three main types of real-time transcription:
 *       <b>Standard</b>, <b>Medical</b>, and
 *       <b>Call Analytics</b>.</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <b>Standard transcriptions</b> are the most common option. Refer
 *       to  for details.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>Medical transcriptions</b> are tailored to medical professionals
 *       and incorporate medical terms. A common use case for this service is transcribing doctor-patient
 *       dialogue in real time, so doctors can focus on their patient instead of taking notes. Refer to
 *        for details.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>Call Analytics transcriptions</b> are designed for use with call
 *           center audio on two different channels; if you're looking for insight into customer service calls, use this
 *           option. Refer to  for details.</p>
 *             </li>
 *          </ul>
 */
export class TranscribeStreaming extends TranscribeStreamingClient implements TranscribeStreaming {}
createAggregatedClient(commands, TranscribeStreaming);
