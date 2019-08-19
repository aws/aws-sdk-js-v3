/**
 * <p>Provides a summary of information about a transcription job. .</p>
 */
export interface _TranscriptionJobSummary {
  /**
   * <p>The name of the transcription job.</p>
   */
  TranscriptionJobName?: string;

  /**
   * <p>A timestamp that shows when the job was created.</p>
   */
  CreationTime?: Date | string | number;

  /**
   * <p>A timestamp that shows when the job was completed.</p>
   */
  CompletionTime?: Date | string | number;

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
   * <p>The status of the transcription job. When the status is <code>COMPLETED</code>, use the <code>GetTranscriptionJob</code> operation to get the results of the transcription.</p>
   */
  TranscriptionJobStatus?: "IN_PROGRESS" | "FAILED" | "COMPLETED" | string;

  /**
   * <p>If the <code>TranscriptionJobStatus</code> field is <code>FAILED</code>, a description of the error.</p>
   */
  FailureReason?: string;

  /**
   * <p>Indicates the location of the output of the transcription job.</p> <p>If the value is <code>CUSTOMER_BUCKET</code> then the location is the S3 bucket specified in the <code>outputBucketName</code> field when the transcription job was started with the <code>StartTranscriptionJob</code> operation.</p> <p>If the value is <code>SERVICE_BUCKET</code> then the output is stored by Amazon Transcribe and can be retrieved using the URI in the <code>GetTranscriptionJob</code> response's <code>TranscriptFileUri</code> field.</p>
   */
  OutputLocationType?: "CUSTOMER_BUCKET" | "SERVICE_BUCKET" | string;
}

export interface _UnmarshalledTranscriptionJobSummary
  extends _TranscriptionJobSummary {
  /**
   * <p>A timestamp that shows when the job was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>A timestamp that shows when the job was completed.</p>
   */
  CompletionTime?: Date;
}
