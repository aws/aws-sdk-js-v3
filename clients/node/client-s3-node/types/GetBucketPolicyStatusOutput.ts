import { _UnmarshalledPolicyStatus } from "./_PolicyStatus";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetBucketPolicyStatusOutput shape
 */
export interface GetBucketPolicyStatusOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The policy status for the specified bucket.</p>
   */
  PolicyStatus?: _UnmarshalledPolicyStatus;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
