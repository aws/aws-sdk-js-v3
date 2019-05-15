import { _UnmarshalledAttributesResource } from "./_AttributesResource";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * RemoveAttributesOutput shape
 */
export interface RemoveAttributesOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * Attributes.
   */
  AttributesResource: _UnmarshalledAttributesResource;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
