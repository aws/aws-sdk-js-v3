import { _AttributeKey, _UnmarshalledAttributeKey } from "./_AttributeKey";
import {
  _LinkAttributeAction,
  _UnmarshalledLinkAttributeAction
} from "./_LinkAttributeAction";

/**
 * <p>Structure that contains attribute update information.</p>
 */
export interface _LinkAttributeUpdate {
  /**
   * <p>The key of the attribute being updated.</p>
   */
  AttributeKey?: _AttributeKey;

  /**
   * <p>The action to perform as part of the attribute update.</p>
   */
  AttributeAction?: _LinkAttributeAction;
}

export interface _UnmarshalledLinkAttributeUpdate extends _LinkAttributeUpdate {
  /**
   * <p>The key of the attribute being updated.</p>
   */
  AttributeKey?: _UnmarshalledAttributeKey;

  /**
   * <p>The action to perform as part of the attribute update.</p>
   */
  AttributeAction?: _UnmarshalledLinkAttributeAction;
}
