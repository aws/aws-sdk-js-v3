import { _Media, _UnmarshalledMedia } from "./_Media";
import { _Transcript, _UnmarshalledTranscript } from "./_Transcript";
import { _Settings, _UnmarshalledSettings } from "./_Settings";

/**
 * <p>Describes an asynchronous transcription job that was created with the <code>StartTranscriptionJob</code> operation. </p>
 */
export interface _TranscriptionJob {
  /**
   * <p>The name of the transcription job.</p>
   */
  TranscriptionJobName?: string;

  /**
   * <p>The status of the transcription job.</p>
   */
  TranscriptionJobStatus?: "IN_PROGRESS" | "FAILED" | "COMPLETED" | string;

  /**
   * <p>The language code for the input speech.</p>
   */
  LanguageCode?:
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
  MediaFormat?: "mp3" | "mp4" | "wav" | "flac" | string;

  /**
   * <p>An object that describes the input media for the transcription job.</p>
   */
  Media?: _Media;

  /**
   * <p>An object that describes the output of the transcription job.</p>
   */
  Transcript?: _Transcript;

  /**
   * <p>A timestamp that shows when the job was created.</p>
   */
  CreationTime?: Date | string | number;

  /**
   * <p>A timestamp that shows when the job was completed.</p>
   */
  CompletionTime?: Date | string | number;

  /**
   * <p>If the <code>TranscriptionJobStatus</code> field is <code>FAILED</code>, this field contains information about why the job failed.</p> <p>The <code>FailureReason</code> field can contain one of the following values:</p> <ul> <li> <p> <code>Unsupported media format</code> - The media format specified in the <code>MediaFormat</code> field of the request isn't valid. See the description of the <code>MediaFormat</code> field for a list of valid values.</p> </li> <li> <p> <code>The media format provided does not match the detected media format</code> - The media format of the audio file doesn't match the format specified in the <code>MediaFormat</code> field in the request. Check the media format of your media file and make sure that the two values match.</p> </li> <li> <p> <code>Invalid sample rate for audio file</code> - The sample rate specified in the <code>MediaSampleRateHertz</code> of the request isn't valid. The sample rate must be between 8000 and 48000 Hertz.</p> </li> <li> <p> <code>The sample rate provided does not match the detected sample rate</code> - The sample rate in the audio file doesn't match the sample rate specified in the <code>MediaSampleRateHertz</code> field in the request. Check the sample rate of your media file and make sure that the two values match.</p> </li> <li> <p> <code>Invalid file size: file size too large</code> - The size of your audio file is larger than Amazon Transcribe can process. For more information, see <a href="https://docs.aws.amazon.com/transcribe/latest/dg/limits-guidelines.html#limits">Limits</a> in the <i>Amazon Transcribe Developer Guide</i>.</p> </li> <li> <p> <code>Invalid number of channels: number of channels too large</code> - Your audio contains more channels than Amazon Transcribe is configured to process. To request additional channels, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_service_limits.html#limits-amazon-transcribe">Amazon Transcribe Limits</a> in the <i>Amazon Web Services General Reference</i>.</p> </li> </ul>
   */
  FailureReason?: string;

  /**
   * <p>Optional settings for the transcription job. Use these settings to turn on speaker recognition, to set the maximum number of speakers that should be identified and to specify a custom vocabulary to use when processing the transcription job.</p>
   */
  Settings?: _Settings;
}

export interface _UnmarshalledTranscriptionJob extends _TranscriptionJob {
  /**
   * <p>An object that describes the input media for the transcription job.</p>
   */
  Media?: _UnmarshalledMedia;

  /**
   * <p>An object that describes the output of the transcription job.</p>
   */
  Transcript?: _UnmarshalledTranscript;

  /**
   * <p>A timestamp that shows when the job was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>A timestamp that shows when the job was completed.</p>
   */
  CompletionTime?: Date;

  /**
   * <p>Optional settings for the transcription job. Use these settings to turn on speaker recognition, to set the maximum number of speakers that should be identified and to specify a custom vocabulary to use when processing the transcription job.</p>
   */
  Settings?: _UnmarshalledSettings;
}
