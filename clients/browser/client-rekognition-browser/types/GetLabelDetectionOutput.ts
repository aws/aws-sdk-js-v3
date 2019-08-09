import { _UnmarshalledVideoMetadata } from "./_VideoMetadata";
import { _UnmarshalledLabelDetection } from "./_LabelDetection";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetLabelDetectionOutput shape
 */
export interface GetLabelDetectionOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The current status of the label detection job.</p>
   */
  JobStatus?: "IN_PROGRESS" | "SUCCEEDED" | "FAILED" | string;

  /**
   * <p>If the job fails, <code>StatusMessage</code> provides a descriptive error message.</p>
   */
  StatusMessage?: string;

  /**
   * <p>Information about a video that Amazon Rekognition Video analyzed. <code>Videometadata</code> is returned in every page of paginated responses from a Amazon Rekognition video operation.</p>
   */
  VideoMetadata?: _UnmarshalledVideoMetadata;

  /**
   * <p>If the response is truncated, Amazon Rekognition Video returns this token that you can use in the subsequent request to retrieve the next set of labels.</p>
   */
  NextToken?: string;

  /**
   * <p>An array of labels detected in the video. Each element contains the detected label and the time, in milliseconds from the start of the video, that the label was detected. </p>
   */
  Labels?: Array<_UnmarshalledLabelDetection>;

  /**
   * <p>Version number of the label detection model that was used to detect labels.</p>
   */
  LabelModelVersion?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
