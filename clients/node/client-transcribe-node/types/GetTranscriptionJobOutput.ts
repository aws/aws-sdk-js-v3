import { _UnmarshalledTranscriptionJob } from "./_TranscriptionJob";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetTranscriptionJobOutput shape
 */
export interface GetTranscriptionJobOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>An object that contains the results of the transcription job.</p>
   */
  TranscriptionJob?: _UnmarshalledTranscriptionJob;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
