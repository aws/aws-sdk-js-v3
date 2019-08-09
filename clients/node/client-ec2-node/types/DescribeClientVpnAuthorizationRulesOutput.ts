import { _UnmarshalledAuthorizationRule } from "./_AuthorizationRule";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeClientVpnAuthorizationRulesOutput shape
 */
export interface DescribeClientVpnAuthorizationRulesOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Information about the authorization rules.</p>
   */
  AuthorizationRules?: Array<_UnmarshalledAuthorizationRule>;

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
