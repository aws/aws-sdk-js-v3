import { _UnmarshalledPipeline } from "./_Pipeline";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>The <code>UpdatePipelineNotificationsResponse</code> structure.</p>
 */
export interface UpdatePipelineNotificationsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A section of the response body that provides information about the pipeline associated with this notification.</p>
   */
  Pipeline?: _UnmarshalledPipeline;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
