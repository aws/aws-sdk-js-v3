import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DeleteRateBasedRuleOutput shape
 */
export interface DeleteRateBasedRuleOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The <code>ChangeToken</code> that you used to submit the <code>DeleteRateBasedRule</code> request. You can also use this value to query the status of the request. For more information, see <a>GetChangeTokenStatus</a>.</p>
   */
  ChangeToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
