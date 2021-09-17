import { TranscribeStreamingClient } from "./TranscribeStreamingClient";
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
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

/**
 * <p>Operations and objects for transcribing streaming speech to text.</p>
 */
export class TranscribeStreaming extends TranscribeStreamingClient {
  /**
   * <p>Starts a bidirectional HTTP/2 stream where audio is streamed to Amazon Transcribe Medical and the
   *             transcription results are streamed to your application.</p>
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
   * <p>Starts a bidirectional HTTP/2 stream where audio is streamed to Amazon Transcribe and the transcription
   *       results are streamed to your application.</p>
   *          <p>The following are encoded as HTTP/2 headers:</p>
   *          <ul>
   *             <li>
   *                <p>x-amzn-transcribe-language-code</p>
   *             </li>
   *             <li>
   *                <p>x-amzn-transcribe-media-encoding</p>
   *             </li>
   *             <li>
   *                <p>x-amzn-transcribe-sample-rate</p>
   *             </li>
   *             <li>
   *                <p>x-amzn-transcribe-session-id</p>
   *             </li>
   *          </ul>
   *          <p>See the <a href="https://docs.aws.amazon.com/sdk-for-go/api/service/transcribestreamingservice/#TranscribeStreamingService.StartStreamTranscription"> SDK for Go API Reference</a> for more detail.</p>
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
