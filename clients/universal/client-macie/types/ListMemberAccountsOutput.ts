import { _UnmarshalledMemberAccount } from "./_MemberAccount";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListMemberAccountsOutput shape
 */
export interface ListMemberAccountsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A list of the Amazon Macie member accounts returned by the action. The current master account is also included in this list. </p>
   */
  memberAccounts?: Array<_UnmarshalledMemberAccount>;

  /**
   * <p>When a response is generated, if there is more data to be listed, this parameter is present in the response and contains the value to use for the nextToken parameter in a subsequent pagination request. If there is no more data to be listed, this parameter is set to null. </p>
   */
  nextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
