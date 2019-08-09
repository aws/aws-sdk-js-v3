/**
 * <p>Provides status change reason details for the instance fleet.</p> <note> <p>The instance fleet configuration is available only in Amazon EMR versions 4.8.0 and later, excluding 5.0.x versions.</p> </note>
 */
export interface _InstanceFleetStateChangeReason {
  /**
   * <p>A code corresponding to the reason the state change occurred.</p>
   */
  Code?:
    | "INTERNAL_ERROR"
    | "VALIDATION_ERROR"
    | "INSTANCE_FAILURE"
    | "CLUSTER_TERMINATED"
    | string;

  /**
   * <p>An explanatory message.</p>
   */
  Message?: string;
}

export type _UnmarshalledInstanceFleetStateChangeReason = _InstanceFleetStateChangeReason;
