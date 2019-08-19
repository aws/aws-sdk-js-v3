import {
  _PendingMaintenanceAction,
  _UnmarshalledPendingMaintenanceAction
} from "./_PendingMaintenanceAction";

/**
 * <p>Represents the output of <a>ApplyPendingMaintenanceAction</a>.</p>
 */
export interface _ResourcePendingMaintenanceActions {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource that has pending maintenance actions.</p>
   */
  ResourceIdentifier?: string;

  /**
   * <p>A list that provides details about the pending maintenance actions for the resource.</p>
   */
  PendingMaintenanceActionDetails?:
    | Array<_PendingMaintenanceAction>
    | Iterable<_PendingMaintenanceAction>;
}

export interface _UnmarshalledResourcePendingMaintenanceActions
  extends _ResourcePendingMaintenanceActions {
  /**
   * <p>A list that provides details about the pending maintenance actions for the resource.</p>
   */
  PendingMaintenanceActionDetails?: Array<
    _UnmarshalledPendingMaintenanceAction
  >;
}
