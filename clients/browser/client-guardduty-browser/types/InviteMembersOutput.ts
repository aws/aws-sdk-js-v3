import { _UnmarshalledUnprocessedAccount } from "./_UnprocessedAccount";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * InviteMembersOutput shape
 */
export interface InviteMembersOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A list of objects containing the unprocessed account and a result string explaining why it was unprocessed.</p>
   */
  UnprocessedAccounts: Array<_UnmarshalledUnprocessedAccount>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
