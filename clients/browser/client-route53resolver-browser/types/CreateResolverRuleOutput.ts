import { _UnmarshalledResolverRule } from "./_ResolverRule";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateResolverRuleOutput shape
 */
export interface CreateResolverRuleOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Information about the <code>CreateResolverRule</code> request, including the status of the request.</p>
   */
  ResolverRule?: _UnmarshalledResolverRule;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
