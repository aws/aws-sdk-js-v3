import { _UnmarshalledPolicyVersion } from "./_PolicyVersion";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Contains the response to a successful <a>GetPolicyVersion</a> request. </p>
 */
export interface GetPolicyVersionOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A structure containing details about the policy version.</p>
   */
  PolicyVersion?: _UnmarshalledPolicyVersion;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
