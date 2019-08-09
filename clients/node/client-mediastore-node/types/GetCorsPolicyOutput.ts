import { _UnmarshalledCorsRule } from "./_CorsRule";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetCorsPolicyOutput shape
 */
export interface GetCorsPolicyOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The CORS policy assigned to the container.</p>
   */
  CorsPolicy: Array<_UnmarshalledCorsRule>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
