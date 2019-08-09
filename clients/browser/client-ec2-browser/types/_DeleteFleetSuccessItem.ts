/**
 * <p>Describes an EC2 Fleet that was successfully deleted.</p>
 */
export interface _DeleteFleetSuccessItem {
  /**
   * <p>The current state of the EC2 Fleet.</p>
   */
  CurrentFleetState?:
    | "submitted"
    | "active"
    | "deleted"
    | "failed"
    | "deleted-running"
    | "deleted-terminating"
    | "modifying"
    | string;

  /**
   * <p>The previous state of the EC2 Fleet.</p>
   */
  PreviousFleetState?:
    | "submitted"
    | "active"
    | "deleted"
    | "failed"
    | "deleted-running"
    | "deleted-terminating"
    | "modifying"
    | string;

  /**
   * <p>The ID of the EC2 Fleet.</p>
   */
  FleetId?: string;
}

export type _UnmarshalledDeleteFleetSuccessItem = _DeleteFleetSuccessItem;
