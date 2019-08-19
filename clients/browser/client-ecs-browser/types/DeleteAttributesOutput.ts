import { _UnmarshalledAttribute } from "./_Attribute";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DeleteAttributesOutput shape
 */
export interface DeleteAttributesOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A list of attribute objects that were successfully deleted from your resource.</p>
   */
  attributes?: Array<_UnmarshalledAttribute>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
