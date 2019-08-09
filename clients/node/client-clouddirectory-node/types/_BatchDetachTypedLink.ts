import {
  _TypedLinkSpecifier,
  _UnmarshalledTypedLinkSpecifier
} from "./_TypedLinkSpecifier";

/**
 * <p>Detaches a typed link from a specified source and target object inside a <a>BatchRead</a> operation. For more information, see <a>DetachTypedLink</a> and <a>BatchReadRequest$Operations</a>.</p>
 */
export interface _BatchDetachTypedLink {
  /**
   * <p>Used to accept a typed link specifier as input.</p>
   */
  TypedLinkSpecifier: _TypedLinkSpecifier;
}

export interface _UnmarshalledBatchDetachTypedLink
  extends _BatchDetachTypedLink {
  /**
   * <p>Used to accept a typed link specifier as input.</p>
   */
  TypedLinkSpecifier: _UnmarshalledTypedLinkSpecifier;
}
