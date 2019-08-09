import { _UnmarshalledIdentityPoolUsage } from "./_IdentityPoolUsage";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * Response to a successful DescribeIdentityPoolUsage request.
 */
export interface DescribeIdentityPoolUsageOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * Information about the usage of the identity pool.
   */
  IdentityPoolUsage?: _UnmarshalledIdentityPoolUsage;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
