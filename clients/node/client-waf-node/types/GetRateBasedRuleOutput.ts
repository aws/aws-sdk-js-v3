import { _UnmarshalledRateBasedRule } from "./_RateBasedRule";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetRateBasedRuleOutput shape
 */
export interface GetRateBasedRuleOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Information about the <a>RateBasedRule</a> that you specified in the <code>GetRateBasedRule</code> request.</p>
   */
  Rule?: _UnmarshalledRateBasedRule;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
