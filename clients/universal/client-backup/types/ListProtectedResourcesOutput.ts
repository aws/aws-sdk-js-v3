import { _UnmarshalledProtectedResource } from "./_ProtectedResource";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListProtectedResourcesOutput shape
 */
export interface ListProtectedResourcesOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>An array of resources successfully backed up by AWS Backup including the time the resource was saved, an Amazon Resource Name (ARN) of the resource, and a resource type.</p>
   */
  Results?: Array<_UnmarshalledProtectedResource>;

  /**
   * <p>The next item following a partial list of returned items. For example, if a request is made to return <code>maxResults</code> number of items, <code>NextToken</code> allows you to return more items in your list starting at the location pointed to by the next token.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
