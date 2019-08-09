/**
 * <p>Information about a document that matches the search request.</p>
 */
export interface _Hit {
  /**
   * <p>The document ID of a document that matches the search request.</p>
   */
  id?: string;

  /**
   * <p>The fields returned from a document that matches the search request.</p>
   */
  fields?:
    | { [key: string]: Array<string> | Iterable<string> }
    | Iterable<[string, Array<string> | Iterable<string>]>;

  /**
   * <p>The expressions returned from a document that matches the search request.</p>
   */
  exprs?: { [key: string]: string } | Iterable<[string, string]>;

  /**
   * <p>The highlights returned from a document that matches the search request.</p>
   */
  highlights?: { [key: string]: string } | Iterable<[string, string]>;
}

export interface _UnmarshalledHit extends _Hit {
  /**
   * <p>The fields returned from a document that matches the search request.</p>
   */
  fields?: { [key: string]: Array<string> };

  /**
   * <p>The expressions returned from a document that matches the search request.</p>
   */
  exprs?: { [key: string]: string };

  /**
   * <p>The highlights returned from a document that matches the search request.</p>
   */
  highlights?: { [key: string]: string };
}
