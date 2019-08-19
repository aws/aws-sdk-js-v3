import {
  _TypedLinkSpecifier,
  _UnmarshalledTypedLinkSpecifier
} from "./_TypedLinkSpecifier";

/**
 * <p>Retrieves attributes that are associated with a typed link inside a <a>BatchRead</a> operation. For more information, see <a>GetLinkAttributes</a> and <a>BatchReadRequest$Operations</a>.</p>
 */
export interface _BatchGetLinkAttributes {
  /**
   * <p>Allows a typed link specifier to be accepted as input.</p>
   */
  TypedLinkSpecifier: _TypedLinkSpecifier;

  /**
   * <p>A list of attribute names whose values will be retrieved.</p>
   */
  AttributeNames: Array<string> | Iterable<string>;
}

export interface _UnmarshalledBatchGetLinkAttributes
  extends _BatchGetLinkAttributes {
  /**
   * <p>Allows a typed link specifier to be accepted as input.</p>
   */
  TypedLinkSpecifier: _UnmarshalledTypedLinkSpecifier;

  /**
   * <p>A list of attribute names whose values will be retrieved.</p>
   */
  AttributeNames: Array<string>;
}
