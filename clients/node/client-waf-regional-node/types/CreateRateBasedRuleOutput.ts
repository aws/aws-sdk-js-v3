import { _UnmarshalledRateBasedRule } from "./_RateBasedRule";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateRateBasedRuleOutput shape
 */
export interface CreateRateBasedRuleOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The <a>RateBasedRule</a> that is returned in the <code>CreateRateBasedRule</code> response.</p>
   */
  Rule?: _UnmarshalledRateBasedRule;

  /**
   * <p>The <code>ChangeToken</code> that you used to submit the <code>CreateRateBasedRule</code> request. You can also use this value to query the status of the request. For more information, see <a>GetChangeTokenStatus</a>.</p>
   */
  ChangeToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
