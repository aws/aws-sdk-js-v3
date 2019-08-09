import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetResolverRulePolicyOutput shape
 */
export interface GetResolverRulePolicyOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Information about the resolver rule policy that you specified in a <code>GetResolverRulePolicy</code> request.</p>
   */
  ResolverRulePolicy?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
