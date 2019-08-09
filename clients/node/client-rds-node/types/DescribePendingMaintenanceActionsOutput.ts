import { _UnmarshalledResourcePendingMaintenanceActions } from "./_ResourcePendingMaintenanceActions";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Data returned from the <b>DescribePendingMaintenanceActions</b> action.</p>
 */
export interface DescribePendingMaintenanceActionsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A list of the pending maintenance actions for the resource.</p>
   */
  PendingMaintenanceActions?: Array<
    _UnmarshalledResourcePendingMaintenanceActions
  >;

  /**
   * <p> An optional pagination token provided by a previous <code>DescribePendingMaintenanceActions</code> request. If this parameter is specified, the response includes only records beyond the marker, up to a number of records specified by <code>MaxRecords</code>. </p>
   */
  Marker?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
