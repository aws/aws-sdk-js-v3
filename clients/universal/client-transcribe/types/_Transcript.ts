/**
 * <p>Identifies the location of a transcription.</p>
 */
export interface _Transcript {
  /**
   * <p>The location where the transcription is stored.</p> <p>Use this URI to access the transcription. If you specified an S3 bucket in the <code>OutputBucketName</code> field when you created the job, this is the URI of that bucket. If you chose to store the transcription in Amazon Transcribe, this is a shareable URL that provides secure access to that location.</p>
   */
  TranscriptFileUri?: string;
}

export type _UnmarshalledTranscript = _Transcript;
