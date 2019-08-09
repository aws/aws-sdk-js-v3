import { _UnmarshalledTag } from "./_Tag";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListTagsForResourceOutput shape
 */
export interface ListTagsForResourceOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>This value is the ARN you specified to list the tags of.</p>
   */
  Arn?: string;

  /**
   * <p>When you can get additional results from the <code>ListTagsForResource</code> call, a <code>NextToken</code> parameter is returned in the output. You can then pass in a subsequent command the <code>NextToken</code> parameter to continue listing additional tags.</p>
   */
  NextToken?: string;

  /**
   * <p>Key-value pairs that are assigned to a resource, usually for the purpose of grouping and searching for items. Tags are metadata that you define that you can use for any purpose.</p>
   */
  Tags?: Array<_UnmarshalledTag>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
