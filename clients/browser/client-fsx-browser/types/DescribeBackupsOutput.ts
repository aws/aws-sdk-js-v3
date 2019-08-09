import { _UnmarshalledBackup } from "./_Backup";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Response object for <code>DescribeBackups</code> operation.</p>
 */
export interface DescribeBackupsOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Any array of backups.</p>
   */
  Backups?: Array<_UnmarshalledBackup>;

  /**
   * <p>This is present if there are more backups than returned in the response (String). You can use the <code>NextToken</code> value in the later request to fetch the backups. </p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
