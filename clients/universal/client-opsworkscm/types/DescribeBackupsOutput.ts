import { _UnmarshalledBackup } from "./_Backup";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeBackupsOutput shape
 */
export interface DescribeBackupsOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Contains the response to a <code>DescribeBackups</code> request. </p>
   */
  Backups?: Array<_UnmarshalledBackup>;

  /**
   * <p>This is not currently implemented for <code>DescribeBackups</code> requests.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
