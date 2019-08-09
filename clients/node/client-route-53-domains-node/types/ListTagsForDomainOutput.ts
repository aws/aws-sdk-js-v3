import { _UnmarshalledTag } from "./_Tag";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>The ListTagsForDomain response includes the following elements.</p>
 */
export interface ListTagsForDomainOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A list of the tags that are associated with the specified domain.</p>
   */
  TagList: Array<_UnmarshalledTag>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
