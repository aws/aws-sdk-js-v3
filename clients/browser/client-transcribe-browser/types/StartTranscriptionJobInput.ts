import { _Media } from "./_Media";
import { _Settings } from "./_Settings";
import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * StartTranscriptionJobInput shape
 */
export interface StartTranscriptionJobInput {
  /**
   * <p>The name of the job. Note that you can't use the strings "." or ".." by themselves as the job name. The name must also be unique within an AWS account.</p>
   */
  TranscriptionJobName: string;

  /**
   * <p>The language code for the language used in the input media file.</p>
   */
  LanguageCode:
    | "en-US"
    | "es-US"
    | "en-AU"
    | "fr-CA"
    | "en-GB"
    | "de-DE"
    | "pt-BR"
    | "fr-FR"
    | "it-IT"
    | "ko-KR"
    | "es-ES"
    | "en-IN"
    | "hi-IN"
    | "ar-SA"
    | string;

  /**
   * <p>The sample rate, in Hertz, of the audio track in the input media file. </p>
   */
  MediaSampleRateHertz?: number;

  /**
   * <p>The format of the input media file.</p>
   */
  MediaFormat: "mp3" | "mp4" | "wav" | "flac" | string;

  /**
   * <p>An object that describes the input media for a transcription job.</p>
   */
  Media: _Media;

  /**
   * <p>The location where the transcription is stored.</p> <p>If you set the <code>OutputBucketName</code>, Amazon Transcribe puts the transcription in the specified S3 bucket. When you call the <a>GetTranscriptionJob</a> operation, the operation returns this location in the <code>TranscriptFileUri</code> field. The S3 bucket must have permissions that allow Amazon Transcribe to put files in the bucket. For more information, see <a href="https://docs.aws.amazon.com/transcribe/latest/dg/access-control-managing-permissions.html#auth-role-iam-user">Permissions Required for IAM User Roles</a>.</p> <p>Amazon Transcribe uses the default Amazon S3 key for server-side encryption of transcripts that are placed in your S3 bucket. You can't specify your own encryption key.</p> <p>If you don't set the <code>OutputBucketName</code>, Amazon Transcribe generates a pre-signed URL, a shareable URL that provides secure access to your transcription, and returns it in the <code>TranscriptFileUri</code> field. Use this URL to download the transcription.</p>
   */
  OutputBucketName?: string;

  /**
   * <p>A <code>Settings</code> object that provides optional settings for a transcription job.</p>
   */
  Settings?: _Settings;

  /**
   * The maximum number of times this operation should be retried. If set, this value will override the `maxRetries` configuration set on the client for this command.
   */
  $maxRetries?: number;

  /**
   * An object that may be queried to determine if the underlying operation has been aborted.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal
   */
  $abortSignal?: __aws_sdk_types.AbortSignal;

  /**
   * Per-request HTTP configuration options. If set, any options specified will override the corresponding HTTP option set on the client for this command.
   */
  $httpOptions?: __HttpOptions__;
}
