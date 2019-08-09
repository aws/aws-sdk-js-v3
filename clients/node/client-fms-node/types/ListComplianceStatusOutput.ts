import { _UnmarshalledPolicyComplianceStatus } from "./_PolicyComplianceStatus";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListComplianceStatusOutput shape
 */
export interface ListComplianceStatusOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>An array of <code>PolicyComplianceStatus</code> objects.</p>
   */
  PolicyComplianceStatusList?: Array<_UnmarshalledPolicyComplianceStatus>;

  /**
   * <p>If you have more <code>PolicyComplianceStatus</code> objects than the number that you specified for <code>MaxResults</code> in the request, the response includes a <code>NextToken</code> value. To list more <code>PolicyComplianceStatus</code> objects, submit another <code>ListComplianceStatus</code> request, and specify the <code>NextToken</code> value from the response in the <code>NextToken</code> value in the next request.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
