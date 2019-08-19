import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>The response to a <code>PutResolverRulePolicy</code> request.</p>
 */
export interface PutResolverRulePolicyOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Whether the <code>PutResolverRulePolicy</code> request was successful.</p>
   */
  ReturnValue?: boolean;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
