import { _UnmarshalledPolicy } from "./_Policy";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetPolicyOutput shape
 */
export interface GetPolicyOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Information about the specified AWS Firewall Manager policy.</p>
   */
  Policy?: _UnmarshalledPolicy;

  /**
   * <p>The Amazon Resource Name (ARN) of the specified policy.</p>
   */
  PolicyArn?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
