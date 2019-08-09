import { _UnmarshalledTag } from "./_Tag";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListTagsOutput shape
 */
export interface ListTagsOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The tags associated with your private CA.</p>
   */
  Tags?: Array<_UnmarshalledTag>;

  /**
   * <p>When the list is truncated, this value is present and should be used for the <b>NextToken</b> parameter in a subsequent pagination request. </p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
