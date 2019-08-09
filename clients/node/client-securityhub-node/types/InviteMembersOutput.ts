import { _UnmarshalledResult } from "./_Result";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * InviteMembersOutput shape
 */
export interface InviteMembersOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A list of account ID and email address pairs of the AWS accounts that couldn't be processed. </p>
   */
  UnprocessedAccounts?: Array<_UnmarshalledResult>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
