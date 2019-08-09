import { _UnmarshalledResolverRuleAssociation } from "./_ResolverRuleAssociation";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListResolverRuleAssociationsOutput shape
 */
export interface ListResolverRuleAssociationsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>If more than <code>MaxResults</code> rule associations match the specified criteria, you can submit another <code>ListResolverRuleAssociation</code> request to get the next group of results. In the next request, specify the value of <code>NextToken</code> from the previous response. </p>
   */
  NextToken?: string;

  /**
   * <p>The value that you specified for <code>MaxResults</code> in the request.</p>
   */
  MaxResults?: number;

  /**
   * <p>The associations that were created between resolver rules and VPCs using the current AWS account, and that match the specified filters, if any.</p>
   */
  ResolverRuleAssociations?: Array<_UnmarshalledResolverRuleAssociation>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
