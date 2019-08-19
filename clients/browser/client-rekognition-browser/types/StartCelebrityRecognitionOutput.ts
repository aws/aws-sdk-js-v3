import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * StartCelebrityRecognitionOutput shape
 */
export interface StartCelebrityRecognitionOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The identifier for the celebrity recognition analysis job. Use <code>JobId</code> to identify the job in a subsequent call to <code>GetCelebrityRecognition</code>.</p>
   */
  JobId?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
