import { _UnmarshalledTableRestoreStatus } from "./_TableRestoreStatus";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * RestoreTableFromClusterSnapshotOutput shape
 */
export interface RestoreTableFromClusterSnapshotOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Describes the status of a <a>RestoreTableFromClusterSnapshot</a> operation.</p>
   */
  TableRestoreStatus?: _UnmarshalledTableRestoreStatus;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
