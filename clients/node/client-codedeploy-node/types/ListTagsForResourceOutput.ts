import { _UnmarshalledTag } from "./_Tag";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListTagsForResourceOutput shape
 */
export interface ListTagsForResourceOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p> A list of tags returned by <code>ListTagsForResource</code>. The tags are associated with the resource identified by the input <code>ResourceArn</code> parameter. </p>
   */
  Tags?: Array<_UnmarshalledTag>;

  /**
   * <p>If a large amount of information is returned, an identifier is also returned. It can be used in a subsequent list application revisions call to return the next set of application revisions in the list.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
