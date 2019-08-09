import { _AttributeKey, _UnmarshalledAttributeKey } from "./_AttributeKey";
import {
  _ObjectAttributeAction,
  _UnmarshalledObjectAttributeAction
} from "./_ObjectAttributeAction";

/**
 * <p>Structure that contains attribute update information.</p>
 */
export interface _ObjectAttributeUpdate {
  /**
   * <p>The key of the attribute being updated.</p>
   */
  ObjectAttributeKey?: _AttributeKey;

  /**
   * <p>The action to perform as part of the attribute update.</p>
   */
  ObjectAttributeAction?: _ObjectAttributeAction;
}

export interface _UnmarshalledObjectAttributeUpdate
  extends _ObjectAttributeUpdate {
  /**
   * <p>The key of the attribute being updated.</p>
   */
  ObjectAttributeKey?: _UnmarshalledAttributeKey;

  /**
   * <p>The action to perform as part of the attribute update.</p>
   */
  ObjectAttributeAction?: _UnmarshalledObjectAttributeAction;
}
