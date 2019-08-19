import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListMemberAccountsOutput shape
 */
export interface ListMemberAccountsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>An array of account IDs.</p>
   */
  MemberAccounts?: Array<string>;

  /**
   * <p>If you have more member account IDs than the number that you specified for <code>MaxResults</code> in the request, the response includes a <code>NextToken</code> value. To list more IDs, submit another <code>ListMemberAccounts</code> request, and specify the <code>NextToken</code> value from the response in the <code>NextToken</code> value in the next request.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
