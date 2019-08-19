import {
  _TypedLinkSpecifier,
  _UnmarshalledTypedLinkSpecifier
} from "./_TypedLinkSpecifier";

/**
 * <p>Represents the output of a <a>ListIncomingTypedLinks</a> response operation.</p>
 */
export interface _BatchListIncomingTypedLinksResponse {
  /**
   * <p>Returns one or more typed link specifiers as output.</p>
   */
  LinkSpecifiers?: Array<_TypedLinkSpecifier> | Iterable<_TypedLinkSpecifier>;

  /**
   * <p>The pagination token.</p>
   */
  NextToken?: string;
}

export interface _UnmarshalledBatchListIncomingTypedLinksResponse
  extends _BatchListIncomingTypedLinksResponse {
  /**
   * <p>Returns one or more typed link specifiers as output.</p>
   */
  LinkSpecifiers?: Array<_UnmarshalledTypedLinkSpecifier>;
}
