import { _UnmarshalledPolicyVersion } from "./_PolicyVersion";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>The output from the ListPolicyVersions operation.</p>
 */
export interface ListPolicyVersionsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The policy versions.</p>
   */
  policyVersions?: Array<_UnmarshalledPolicyVersion>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
