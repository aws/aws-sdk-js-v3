import { _UnmarshalledBackup } from "./_Backup";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeBackupsOutput shape
 */
export interface DescribeBackupsOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A list of backups.</p>
   */
  Backups?: Array<_UnmarshalledBackup>;

  /**
   * <p>An opaque string that indicates that the response contains only a subset of backups. Use this value in a subsequent <code>DescribeBackups</code> request to get more backups.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
