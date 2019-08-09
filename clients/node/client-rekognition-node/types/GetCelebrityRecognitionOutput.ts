import { _UnmarshalledVideoMetadata } from "./_VideoMetadata";
import { _UnmarshalledCelebrityRecognition } from "./_CelebrityRecognition";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetCelebrityRecognitionOutput shape
 */
export interface GetCelebrityRecognitionOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The current status of the celebrity recognition job.</p>
   */
  JobStatus?: "IN_PROGRESS" | "SUCCEEDED" | "FAILED" | string;

  /**
   * <p>If the job fails, <code>StatusMessage</code> provides a descriptive error message.</p>
   */
  StatusMessage?: string;

  /**
   * <p>Information about a video that Amazon Rekognition Video analyzed. <code>Videometadata</code> is returned in every page of paginated responses from a Amazon Rekognition Video operation.</p>
   */
  VideoMetadata?: _UnmarshalledVideoMetadata;

  /**
   * <p>If the response is truncated, Amazon Rekognition Video returns this token that you can use in the subsequent request to retrieve the next set of celebrities.</p>
   */
  NextToken?: string;

  /**
   * <p>Array of celebrities recognized in the video.</p>
   */
  Celebrities?: Array<_UnmarshalledCelebrityRecognition>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
