import { _UnmarshalledVideoMetadata } from "./_VideoMetadata";
import { _UnmarshalledPersonDetection } from "./_PersonDetection";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetPersonTrackingOutput shape
 */
export interface GetPersonTrackingOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The current status of the person tracking job.</p>
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
   * <p>If the response is truncated, Amazon Rekognition Video returns this token that you can use in the subsequent request to retrieve the next set of persons. </p>
   */
  NextToken?: string;

  /**
   * <p>An array of the persons detected in the video and the time(s) their path was tracked throughout the video. An array element will exist for each time a person's path is tracked. </p>
   */
  Persons?: Array<_UnmarshalledPersonDetection>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
