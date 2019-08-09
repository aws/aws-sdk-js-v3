import {
  _TypedLinkSpecifier,
  _UnmarshalledTypedLinkSpecifier
} from "./_TypedLinkSpecifier";
import {
  _LinkAttributeUpdate,
  _UnmarshalledLinkAttributeUpdate
} from "./_LinkAttributeUpdate";

/**
 * <p>Updates a given typed link’s attributes inside a <a>BatchRead</a> operation. Attributes to be updated must not contribute to the typed link’s identity, as defined by its <code>IdentityAttributeOrder</code>. For more information, see <a>UpdateLinkAttributes</a> and <a>BatchReadRequest$Operations</a>.</p>
 */
export interface _BatchUpdateLinkAttributes {
  /**
   * <p>Allows a typed link specifier to be accepted as input.</p>
   */
  TypedLinkSpecifier: _TypedLinkSpecifier;

  /**
   * <p>The attributes update structure.</p>
   */
  AttributeUpdates:
    | Array<_LinkAttributeUpdate>
    | Iterable<_LinkAttributeUpdate>;
}

export interface _UnmarshalledBatchUpdateLinkAttributes
  extends _BatchUpdateLinkAttributes {
  /**
   * <p>Allows a typed link specifier to be accepted as input.</p>
   */
  TypedLinkSpecifier: _UnmarshalledTypedLinkSpecifier;

  /**
   * <p>The attributes update structure.</p>
   */
  AttributeUpdates: Array<_UnmarshalledLinkAttributeUpdate>;
}
