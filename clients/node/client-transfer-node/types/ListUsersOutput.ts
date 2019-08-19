import { _UnmarshalledListedUser } from "./_ListedUser";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListUsersOutput shape
 */
export interface ListUsersOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>When you can get additional results from the <code>ListUsers</code> call, a <code>NextToken</code> parameter is returned in the output. You can then pass in a subsequent command the <code>NextToken</code> parameter to continue listing additional users.</p>
   */
  NextToken?: string;

  /**
   * <p>A system-assigned unique identifier for an SFTP server that the users are assigned to.</p>
   */
  ServerId: string;

  /**
   * <p>Returns the user accounts and their properties for the <code>ServerId</code> value that you specify.</p>
   */
  Users: Array<_UnmarshalledListedUser>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
