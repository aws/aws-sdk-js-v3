import { _UnmarshalledResolverRule } from "./_ResolverRule";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * UpdateResolverRuleOutput shape
 */
export interface UpdateResolverRuleOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The response to an <code>UpdateResolverRule</code> request.</p>
   */
  ResolverRule?: _UnmarshalledResolverRule;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
