import { _UnmarshalledPolicyComplianceDetail } from "./_PolicyComplianceDetail";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetComplianceDetailOutput shape
 */
export interface GetComplianceDetailOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Information about the resources and the policy that you specified in the <code>GetComplianceDetail</code> request.</p>
   */
  PolicyComplianceDetail?: _UnmarshalledPolicyComplianceDetail;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
