import { _UnmarshalledResourcePendingMaintenanceActions } from "./_ResourcePendingMaintenanceActions";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Represents the output of <a>DescribePendingMaintenanceActions</a>.</p>
 */
export interface DescribePendingMaintenanceActionsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The maintenance actions to be applied.</p>
   */
  PendingMaintenanceActions?: Array<
    _UnmarshalledResourcePendingMaintenanceActions
  >;

  /**
   * <p>An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>.</p>
   */
  Marker?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
