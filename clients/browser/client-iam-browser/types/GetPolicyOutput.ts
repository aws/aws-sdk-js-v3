import { _UnmarshalledPolicy } from "./_Policy";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Contains the response to a successful <a>GetPolicy</a> request. </p>
 */
export interface GetPolicyOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A structure containing details about the policy.</p>
   */
  Policy?: _UnmarshalledPolicy;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
