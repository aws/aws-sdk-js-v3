import { _UnmarshalledReceiptRuleSetMetadata } from "./_ReceiptRuleSetMetadata";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>A list of receipt rule sets that exist under your AWS account.</p>
 */
export interface ListReceiptRuleSetsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The metadata for the currently active receipt rule set. The metadata consists of the rule set name and the timestamp of when the rule set was created.</p>
   */
  RuleSets?: Array<_UnmarshalledReceiptRuleSetMetadata>;

  /**
   * <p>A token indicating that there are additional receipt rule sets available to be listed. Pass this token to successive calls of <code>ListReceiptRuleSets</code> to retrieve up to 100 receipt rule sets at a time.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
