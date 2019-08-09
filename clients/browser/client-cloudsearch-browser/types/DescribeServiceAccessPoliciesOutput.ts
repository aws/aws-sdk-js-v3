import { _UnmarshalledAccessPoliciesStatus } from "./_AccessPoliciesStatus";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>The result of a <code>DescribeServiceAccessPolicies</code> request.</p>
 */
export interface DescribeServiceAccessPoliciesOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The access rules configured for the domain specified in the request.</p>
   */
  AccessPolicies: _UnmarshalledAccessPoliciesStatus;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
