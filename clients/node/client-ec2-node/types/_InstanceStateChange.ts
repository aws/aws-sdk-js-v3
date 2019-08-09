import { _InstanceState, _UnmarshalledInstanceState } from "./_InstanceState";

/**
 * <p>Describes an instance state change.</p>
 */
export interface _InstanceStateChange {
  /**
   * <p>The current state of the instance.</p>
   */
  CurrentState?: _InstanceState;

  /**
   * <p>The ID of the instance.</p>
   */
  InstanceId?: string;

  /**
   * <p>The previous state of the instance.</p>
   */
  PreviousState?: _InstanceState;
}

export interface _UnmarshalledInstanceStateChange extends _InstanceStateChange {
  /**
   * <p>The current state of the instance.</p>
   */
  CurrentState?: _UnmarshalledInstanceState;

  /**
   * <p>The previous state of the instance.</p>
   */
  PreviousState?: _UnmarshalledInstanceState;
}
