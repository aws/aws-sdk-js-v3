import { _UnmarshalledAttributeKeyAndValue } from "./_AttributeKeyAndValue";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetObjectAttributesOutput shape
 */
export interface GetObjectAttributesOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The attributes that are associated with the object.</p>
   */
  Attributes?: Array<_UnmarshalledAttributeKeyAndValue>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
