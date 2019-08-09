import { _Rule, _UnmarshalledRule } from "./_Rule";

/**
 * <p/>
 */
export interface _LifecycleConfiguration {
  /**
   * <p/>
   */
  Rules: Array<_Rule> | Iterable<_Rule>;
}

export interface _UnmarshalledLifecycleConfiguration
  extends _LifecycleConfiguration {
  /**
   * <p/>
   */
  Rules: Array<_UnmarshalledRule>;
}
