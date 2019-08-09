import {
  _ObjectLockRule,
  _UnmarshalledObjectLockRule
} from "./_ObjectLockRule";

/**
 * <p>The container element for object lock configuration parameters.</p>
 */
export interface _ObjectLockConfiguration {
  /**
   * <p>Indicates whether this bucket has an object lock configuration enabled.</p>
   */
  ObjectLockEnabled?: "Enabled" | string;

  /**
   * <p>The object lock rule in place for the specified object.</p>
   */
  Rule?: _ObjectLockRule;
}

export interface _UnmarshalledObjectLockConfiguration
  extends _ObjectLockConfiguration {
  /**
   * <p>The object lock rule in place for the specified object.</p>
   */
  Rule?: _UnmarshalledObjectLockRule;
}
