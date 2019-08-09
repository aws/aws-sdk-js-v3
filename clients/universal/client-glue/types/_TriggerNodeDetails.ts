import { _Trigger, _UnmarshalledTrigger } from "./_Trigger";

/**
 * <p>The details of a Trigger node present in the workflow.</p>
 */
export interface _TriggerNodeDetails {
  /**
   * <p>The information of the trigger represented by the trigger node.</p>
   */
  Trigger?: _Trigger;
}

export interface _UnmarshalledTriggerNodeDetails extends _TriggerNodeDetails {
  /**
   * <p>The information of the trigger represented by the trigger node.</p>
   */
  Trigger?: _UnmarshalledTrigger;
}
