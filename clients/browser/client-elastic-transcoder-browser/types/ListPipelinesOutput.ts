import { _UnmarshalledPipeline } from "./_Pipeline";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>A list of the pipelines associated with the current AWS account.</p>
 */
export interface ListPipelinesOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>An array of <code>Pipeline</code> objects.</p>
   */
  Pipelines?: Array<_UnmarshalledPipeline>;

  /**
   * <p>A value that you use to access the second and subsequent pages of results, if any. When the pipelines fit on one page or when you've reached the last page of results, the value of <code>NextPageToken</code> is <code>null</code>.</p>
   */
  NextPageToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
