import { _UnmarshalledResolverRuleAssociation } from "./_ResolverRuleAssociation";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetResolverRuleAssociationOutput shape
 */
export interface GetResolverRuleAssociationOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Information about the resolver rule association that you specified in a <code>GetResolverRuleAssociation</code> request.</p>
   */
  ResolverRuleAssociation?: _UnmarshalledResolverRuleAssociation;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
