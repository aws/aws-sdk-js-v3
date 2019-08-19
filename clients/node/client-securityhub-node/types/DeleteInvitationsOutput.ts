import { _UnmarshalledResult } from "./_Result";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DeleteInvitationsOutput shape
 */
export interface DeleteInvitationsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A list of account ID and email address pairs of the AWS accounts that invitations weren't deleted for.</p>
   */
  UnprocessedAccounts?: Array<_UnmarshalledResult>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
