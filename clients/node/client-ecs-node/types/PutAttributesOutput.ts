import { _UnmarshalledAttribute } from "./_Attribute";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * PutAttributesOutput shape
 */
export interface PutAttributesOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The attributes applied to your resource.</p>
   */
  attributes?: Array<_UnmarshalledAttribute>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
