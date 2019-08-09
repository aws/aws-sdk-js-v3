import { _UnmarshalledPolicySummary } from "./_PolicySummary";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListPoliciesOutput shape
 */
export interface ListPoliciesOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A list of policies that match the filter criteria in the request. The output list doesn't include the policy contents. To see the content for a policy, see <a>DescribePolicy</a>.</p>
   */
  Policies?: Array<_UnmarshalledPolicySummary>;

  /**
   * <p>If present, this value indicates that there is more output available than is included in the current response. Use this value in the <code>NextToken</code> request parameter in a subsequent call to the operation to get the next part of the output. You should repeat this until the <code>NextToken</code> response element comes back as <code>null</code>.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
