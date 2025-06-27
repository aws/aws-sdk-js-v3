// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import {
  GetMedicalScribeStreamCommand,
  GetMedicalScribeStreamCommandInput,
  GetMedicalScribeStreamCommandOutput,
} from "./commands/GetMedicalScribeStreamCommand";
import {
  StartCallAnalyticsStreamTranscriptionCommand,
  StartCallAnalyticsStreamTranscriptionCommandInput,
  StartCallAnalyticsStreamTranscriptionCommandOutput,
} from "./commands/StartCallAnalyticsStreamTranscriptionCommand";
import {
  StartMedicalScribeStreamCommand,
  StartMedicalScribeStreamCommandInput,
  StartMedicalScribeStreamCommandOutput,
} from "./commands/StartMedicalScribeStreamCommand";
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
  GetMedicalScribeStreamCommand,
  StartCallAnalyticsStreamTranscriptionCommand,
  StartMedicalScribeStreamCommand,
  StartMedicalStreamTranscriptionCommand,
  StartStreamTranscriptionCommand,
};

export interface TranscribeStreaming {
  /**
   * @see {@link GetMedicalScribeStreamCommand}
   */
  getMedicalScribeStream(
    args: GetMedicalScribeStreamCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetMedicalScribeStreamCommandOutput>;
  getMedicalScribeStream(
    args: GetMedicalScribeStreamCommandInput,
    cb: (err: any, data?: GetMedicalScribeStreamCommandOutput) => void
  ): void;
  getMedicalScribeStream(
    args: GetMedicalScribeStreamCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetMedicalScribeStreamCommandOutput) => void
  ): void;

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
   * @see {@link StartMedicalScribeStreamCommand}
   */
  startMedicalScribeStream(
    args: StartMedicalScribeStreamCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartMedicalScribeStreamCommandOutput>;
  startMedicalScribeStream(
    args: StartMedicalScribeStreamCommandInput,
    cb: (err: any, data?: StartMedicalScribeStreamCommandOutput) => void
  ): void;
  startMedicalScribeStream(
    args: StartMedicalScribeStreamCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartMedicalScribeStreamCommandOutput) => void
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
 * <p>Amazon Transcribe streaming offers four main types of real-time transcription:
 *       <b>Standard</b>, <b>Medical</b>,
 *       <b>Call Analytics</b>,
 *       and <b>Health Scribe</b>.</p>
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
 *             <li>
 *                <p>
 *                   <b>HealthScribe transcriptions</b> are designed to
 *           automatically create clinical notes from patient-clinician conversations using generative AI.
 *           Refer to [here] for details.</p>
 *             </li>
 *          </ul>
 * @public
 */
export class TranscribeStreaming extends TranscribeStreamingClient implements TranscribeStreaming {}
createAggregatedClient(commands, TranscribeStreaming);
