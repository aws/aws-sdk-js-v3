import { _UnmarshalledRuleSummary } from "./_RuleSummary";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListRulesOutput shape
 */
export interface ListRulesOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>If you have more <code>Rules</code> than the number that you specified for <code>Limit</code> in the request, the response includes a <code>NextMarker</code> value. To list more <code>Rules</code>, submit another <code>ListRules</code> request, and specify the <code>NextMarker</code> value from the response in the <code>NextMarker</code> value in the next request.</p>
   */
  NextMarker?: string;

  /**
   * <p>An array of <a>RuleSummary</a> objects.</p>
   */
  Rules?: Array<_UnmarshalledRuleSummary>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
