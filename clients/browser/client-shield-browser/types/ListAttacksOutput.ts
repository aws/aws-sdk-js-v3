import { _UnmarshalledAttackSummary } from "./_AttackSummary";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListAttacksOutput shape
 */
export interface ListAttacksOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The attack information for the specified time range.</p>
   */
  AttackSummaries?: Array<_UnmarshalledAttackSummary>;

  /**
   * <p>The token returned by a previous call to indicate that there is more data available. If not null, more results are available. Pass this value for the <code>NextMarker</code> parameter in a subsequent call to <code>ListAttacks</code> to retrieve the next set of items.</p> <p>AWS WAF might return the list of <a>AttackSummary</a> objects in batches smaller than the number specified by MaxResults. If there are more <a>AttackSummary</a> objects to return, AWS WAF will always also return a <code>NextToken</code>.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
