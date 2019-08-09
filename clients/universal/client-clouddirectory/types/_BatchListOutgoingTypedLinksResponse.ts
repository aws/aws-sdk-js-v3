import {
  _TypedLinkSpecifier,
  _UnmarshalledTypedLinkSpecifier
} from "./_TypedLinkSpecifier";

/**
 * <p>Represents the output of a <a>ListOutgoingTypedLinks</a> response operation.</p>
 */
export interface _BatchListOutgoingTypedLinksResponse {
  /**
   * <p>Returns a typed link specifier as output.</p>
   */
  TypedLinkSpecifiers?:
    | Array<_TypedLinkSpecifier>
    | Iterable<_TypedLinkSpecifier>;

  /**
   * <p>The pagination token.</p>
   */
  NextToken?: string;
}

export interface _UnmarshalledBatchListOutgoingTypedLinksResponse
  extends _BatchListOutgoingTypedLinksResponse {
  /**
   * <p>Returns a typed link specifier as output.</p>
   */
  TypedLinkSpecifiers?: Array<_UnmarshalledTypedLinkSpecifier>;
}
