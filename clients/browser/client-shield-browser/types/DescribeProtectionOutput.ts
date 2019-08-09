import { _UnmarshalledProtection } from "./_Protection";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeProtectionOutput shape
 */
export interface DescribeProtectionOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The <a>Protection</a> object that is described.</p>
   */
  Protection?: _UnmarshalledProtection;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
