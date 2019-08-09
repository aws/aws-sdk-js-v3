import { _UnmarshalledVideoMetadata } from "./_VideoMetadata";
import { _UnmarshalledContentModerationDetection } from "./_ContentModerationDetection";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetContentModerationOutput shape
 */
export interface GetContentModerationOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The current status of the content moderation job.</p>
   */
  JobStatus?: "IN_PROGRESS" | "SUCCEEDED" | "FAILED" | string;

  /**
   * <p>If the job fails, <code>StatusMessage</code> provides a descriptive error message.</p>
   */
  StatusMessage?: string;

  /**
   * <p>Information about a video that Amazon Rekognition analyzed. <code>Videometadata</code> is returned in every page of paginated responses from <code>GetContentModeration</code>. </p>
   */
  VideoMetadata?: _UnmarshalledVideoMetadata;

  /**
   * <p>The detected moderation labels and the time(s) they were detected.</p>
   */
  ModerationLabels?: Array<_UnmarshalledContentModerationDetection>;

  /**
   * <p>If the response is truncated, Amazon Rekognition Video returns this token that you can use in the subsequent request to retrieve the next set of moderation labels. </p>
   */
  NextToken?: string;

  /**
   * <p>Version number of the moderation detection model that was used to detect unsafe content.</p>
   */
  ModerationModelVersion?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
