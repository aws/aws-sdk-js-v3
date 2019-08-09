import {
  _BehaviorCriteria,
  _UnmarshalledBehaviorCriteria
} from "./_BehaviorCriteria";

/**
 * <p>A Device Defender security profile behavior.</p>
 */
export interface _Behavior {
  /**
   * <p>The name you have given to the behavior.</p>
   */
  name: string;

  /**
   * <p>What is measured by the behavior.</p>
   */
  metric?: string;

  /**
   * <p>The criteria that determine if a device is behaving normally in regard to the <code>metric</code>.</p>
   */
  criteria?: _BehaviorCriteria;
}

export interface _UnmarshalledBehavior extends _Behavior {
  /**
   * <p>The criteria that determine if a device is behaving normally in regard to the <code>metric</code>.</p>
   */
  criteria?: _UnmarshalledBehaviorCriteria;
}
