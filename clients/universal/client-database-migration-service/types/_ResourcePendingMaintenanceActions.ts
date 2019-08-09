import {
  _PendingMaintenanceAction,
  _UnmarshalledPendingMaintenanceAction
} from "./_PendingMaintenanceAction";

/**
 * <p/>
 */
export interface _ResourcePendingMaintenanceActions {
  /**
   * <p>The Amazon Resource Name (ARN) of the DMS resource that the pending maintenance action applies to. For information about creating an ARN, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Introduction.AWS.ARN.html"> Constructing an Amazon Resource Name (ARN) for AWS DMS</a> in the DMS documentation.</p>
   */
  ResourceIdentifier?: string;

  /**
   * <p>Detailed information about the pending maintenance action.</p>
   */
  PendingMaintenanceActionDetails?:
    | Array<_PendingMaintenanceAction>
    | Iterable<_PendingMaintenanceAction>;
}

export interface _UnmarshalledResourcePendingMaintenanceActions
  extends _ResourcePendingMaintenanceActions {
  /**
   * <p>Detailed information about the pending maintenance action.</p>
   */
  PendingMaintenanceActionDetails?: Array<
    _UnmarshalledPendingMaintenanceAction
  >;
}
