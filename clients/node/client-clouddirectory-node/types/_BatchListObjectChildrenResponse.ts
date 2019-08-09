/**
 * <p>Represents the output of a <a>ListObjectChildren</a> response operation.</p>
 */
export interface _BatchListObjectChildrenResponse {
  /**
   * <p>The children structure, which is a map with the key as the <code>LinkName</code> and <code>ObjectIdentifier</code> as the value.</p>
   */
  Children?: { [key: string]: string } | Iterable<[string, string]>;

  /**
   * <p>The pagination token.</p>
   */
  NextToken?: string;
}

export interface _UnmarshalledBatchListObjectChildrenResponse
  extends _BatchListObjectChildrenResponse {
  /**
   * <p>The children structure, which is a map with the key as the <code>LinkName</code> and <code>ObjectIdentifier</code> as the value.</p>
   */
  Children?: { [key: string]: string };
}
