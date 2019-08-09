import {
  _TypedLinkSpecifier,
  _UnmarshalledTypedLinkSpecifier
} from "./_TypedLinkSpecifier";

/**
 * <p>Represents the output of a <a>AttachTypedLink</a> response operation.</p>
 */
export interface _BatchAttachTypedLinkResponse {
  /**
   * <p>Returns a typed link specifier as output.</p>
   */
  TypedLinkSpecifier?: _TypedLinkSpecifier;
}

export interface _UnmarshalledBatchAttachTypedLinkResponse
  extends _BatchAttachTypedLinkResponse {
  /**
   * <p>Returns a typed link specifier as output.</p>
   */
  TypedLinkSpecifier?: _UnmarshalledTypedLinkSpecifier;
}
