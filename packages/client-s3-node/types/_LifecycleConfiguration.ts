import { _Rule, _UnmarshalledRule } from "./_Rule";

/**
 * _LifecycleConfiguration shape
 */
export interface _LifecycleConfiguration {
  /**
   * _Rules shape
   */
  Rules: Array<_Rule> | Iterable<_Rule>;
}

export interface _UnmarshalledLifecycleConfiguration
  extends _LifecycleConfiguration {
  /**
   * _Rules shape
   */
  Rules: Array<_UnmarshalledRule>;
}
