import { _UnmarshalledAuthorizerDescription } from "./_AuthorizerDescription";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeDefaultAuthorizerOutput shape
 */
export interface DescribeDefaultAuthorizerOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The default authorizer's description.</p>
   */
  authorizerDescription?: _UnmarshalledAuthorizerDescription;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
