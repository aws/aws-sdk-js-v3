// smithy-typescript generated code
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

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
import { TranscribeStreamingClient } from "./TranscribeStreamingClient";

/**
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
export class TranscribeStreaming extends TranscribeStreamingClient {
  /**
   * <p>Starts a bidirectional HTTP/2 or WebSocket stream where audio is streamed to
   *       Amazon Transcribe and the transcription results are streamed to your application. Use this operation
   *       for <a href="https://docs.aws.amazon.com/transcribe/latest/dg/call-analytics.html">Call Analytics</a> transcriptions.</p>
   *          <p>The following parameters are required:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>language-code</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>media-encoding</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>sample-rate</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>For more information on streaming with Amazon Transcribe, see <a href="https://docs.aws.amazon.com/transcribe/latest/dg/streaming.html">Transcribing streaming audio</a>.</p>
   */
  public startCallAnalyticsStreamTranscription(
    args: StartCallAnalyticsStreamTranscriptionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartCallAnalyticsStreamTranscriptionCommandOutput>;
  public startCallAnalyticsStreamTranscription(
    args: StartCallAnalyticsStreamTranscriptionCommandInput,
    cb: (err: any, data?: StartCallAnalyticsStreamTranscriptionCommandOutput) => void
  ): void;
  public startCallAnalyticsStreamTranscription(
    args: StartCallAnalyticsStreamTranscriptionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartCallAnalyticsStreamTranscriptionCommandOutput) => void
  ): void;
  public startCallAnalyticsStreamTranscription(
    args: StartCallAnalyticsStreamTranscriptionCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: StartCallAnalyticsStreamTranscriptionCommandOutput) => void),
    cb?: (err: any, data?: StartCallAnalyticsStreamTranscriptionCommandOutput) => void
  ): Promise<StartCallAnalyticsStreamTranscriptionCommandOutput> | void {
    const command = new StartCallAnalyticsStreamTranscriptionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Starts a bidirectional HTTP/2 or WebSocket stream where audio is streamed to
   *             Amazon Transcribe Medical and the transcription results are streamed to your
   *             application.</p>
   *         <p>The following parameters are required:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>language-code</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>media-encoding</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>sample-rate</code>
   *                </p>
   *             </li>
   *          </ul>
   *         <p>For more information on streaming with Amazon Transcribe Medical, see
   *             <a href="https://docs.aws.amazon.com/transcribe/latest/dg/streaming.html">Transcribing
   *                 streaming audio</a>.</p>
   */
  public startMedicalStreamTranscription(
    args: StartMedicalStreamTranscriptionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartMedicalStreamTranscriptionCommandOutput>;
  public startMedicalStreamTranscription(
    args: StartMedicalStreamTranscriptionCommandInput,
    cb: (err: any, data?: StartMedicalStreamTranscriptionCommandOutput) => void
  ): void;
  public startMedicalStreamTranscription(
    args: StartMedicalStreamTranscriptionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartMedicalStreamTranscriptionCommandOutput) => void
  ): void;
  public startMedicalStreamTranscription(
    args: StartMedicalStreamTranscriptionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StartMedicalStreamTranscriptionCommandOutput) => void),
    cb?: (err: any, data?: StartMedicalStreamTranscriptionCommandOutput) => void
  ): Promise<StartMedicalStreamTranscriptionCommandOutput> | void {
    const command = new StartMedicalStreamTranscriptionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Starts a bidirectional HTTP/2 or WebSocket stream where audio is streamed to
   *       Amazon Transcribe and the transcription results are streamed to your application.</p>
   *          <p>The following parameters are required:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>language-code</code> or <code>identify-language</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>media-encoding</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>sample-rate</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>For more information on streaming with Amazon Transcribe, see <a href="https://docs.aws.amazon.com/transcribe/latest/dg/streaming.html">Transcribing streaming audio</a>.</p>
   */
  public startStreamTranscription(
    args: StartStreamTranscriptionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartStreamTranscriptionCommandOutput>;
  public startStreamTranscription(
    args: StartStreamTranscriptionCommandInput,
    cb: (err: any, data?: StartStreamTranscriptionCommandOutput) => void
  ): void;
  public startStreamTranscription(
    args: StartStreamTranscriptionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartStreamTranscriptionCommandOutput) => void
  ): void;
  public startStreamTranscription(
    args: StartStreamTranscriptionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StartStreamTranscriptionCommandOutput) => void),
    cb?: (err: any, data?: StartStreamTranscriptionCommandOutput) => void
  ): Promise<StartStreamTranscriptionCommandOutput> | void {
    const command = new StartStreamTranscriptionCommand(args);
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
