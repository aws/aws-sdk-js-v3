import { _UnmarshalledTranscriptionJob } from "./_TranscriptionJob";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * StartTranscriptionJobOutput shape
 */
export interface StartTranscriptionJobOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>An object containing details of the asynchronous transcription job.</p>
   */
  TranscriptionJob?: _UnmarshalledTranscriptionJob;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
