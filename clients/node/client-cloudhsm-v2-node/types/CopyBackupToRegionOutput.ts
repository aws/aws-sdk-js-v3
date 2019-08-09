import { _UnmarshalledDestinationBackup } from "./_DestinationBackup";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CopyBackupToRegionOutput shape
 */
export interface CopyBackupToRegionOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Information on the backup that will be copied to the destination region, including CreateTimestamp, SourceBackup, SourceCluster, and Source Region. CreateTimestamp of the destination backup will be the same as that of the source backup.</p> <p>You will need to use the <code>sourceBackupID</code> returned in this operation to use the <a>DescribeBackups</a> operation on the backup that will be copied to the destination region.</p>
   */
  DestinationBackup?: _UnmarshalledDestinationBackup;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
