import { _UnmarshalledIdentityUsage } from "./_IdentityUsage";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * The response to a successful DescribeIdentityUsage request.
 */
export interface DescribeIdentityUsageOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * Usage information for the identity.
   */
  IdentityUsage?: _UnmarshalledIdentityUsage;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
