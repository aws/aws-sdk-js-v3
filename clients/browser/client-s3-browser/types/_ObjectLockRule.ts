import {
  _DefaultRetention,
  _UnmarshalledDefaultRetention
} from "./_DefaultRetention";

/**
 * <p>The container element for an object lock rule.</p>
 */
export interface _ObjectLockRule {
  /**
   * <p>The default retention period that you want to apply to new objects placed in the specified bucket.</p>
   */
  DefaultRetention?: _DefaultRetention;
}

export interface _UnmarshalledObjectLockRule extends _ObjectLockRule {
  /**
   * <p>The default retention period that you want to apply to new objects placed in the specified bucket.</p>
   */
  DefaultRetention?: _UnmarshalledDefaultRetention;
}
