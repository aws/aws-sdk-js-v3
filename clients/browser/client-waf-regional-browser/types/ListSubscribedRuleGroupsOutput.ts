import { _UnmarshalledSubscribedRuleGroupSummary } from "./_SubscribedRuleGroupSummary";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListSubscribedRuleGroupsOutput shape
 */
export interface ListSubscribedRuleGroupsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>If you have more objects than the number that you specified for <code>Limit</code> in the request, the response includes a <code>NextMarker</code> value. To list more objects, submit another <code>ListSubscribedRuleGroups</code> request, and specify the <code>NextMarker</code> value from the response in the <code>NextMarker</code> value in the next request.</p>
   */
  NextMarker?: string;

  /**
   * <p>An array of <a>RuleGroup</a> objects.</p>
   */
  RuleGroups?: Array<_UnmarshalledSubscribedRuleGroupSummary>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
