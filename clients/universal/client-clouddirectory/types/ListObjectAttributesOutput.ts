import { _UnmarshalledAttributeKeyAndValue } from "./_AttributeKeyAndValue";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListObjectAttributesOutput shape
 */
export interface ListObjectAttributesOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Attributes map that is associated with the object. <code>AttributeArn</code> is the key, and attribute value is the value.</p>
   */
  Attributes?: Array<_UnmarshalledAttributeKeyAndValue>;

  /**
   * <p>The pagination token.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
