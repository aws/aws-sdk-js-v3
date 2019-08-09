import { _UnmarshalledVideoMetadata } from "./_VideoMetadata";
import { _UnmarshalledFaceDetection } from "./_FaceDetection";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetFaceDetectionOutput shape
 */
export interface GetFaceDetectionOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The current status of the face detection job.</p>
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
   * <p>If the response is truncated, Amazon Rekognition returns this token that you can use in the subsequent request to retrieve the next set of faces. </p>
   */
  NextToken?: string;

  /**
   * <p>An array of faces detected in the video. Each element contains a detected face's details and the time, in milliseconds from the start of the video, the face was detected. </p>
   */
  Faces?: Array<_UnmarshalledFaceDetection>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
