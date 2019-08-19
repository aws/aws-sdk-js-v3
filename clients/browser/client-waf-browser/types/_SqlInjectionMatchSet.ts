import {
  _SqlInjectionMatchTuple,
  _UnmarshalledSqlInjectionMatchTuple
} from "./_SqlInjectionMatchTuple";

/**
 * <p>A complex type that contains <code>SqlInjectionMatchTuple</code> objects, which specify the parts of web requests that you want AWS WAF to inspect for snippets of malicious SQL code and, if you want AWS WAF to inspect a header, the name of the header. If a <code>SqlInjectionMatchSet</code> contains more than one <code>SqlInjectionMatchTuple</code> object, a request needs to include snippets of SQL code in only one of the specified parts of the request to be considered a match.</p>
 */
export interface _SqlInjectionMatchSet {
  /**
   * <p>A unique identifier for a <code>SqlInjectionMatchSet</code>. You use <code>SqlInjectionMatchSetId</code> to get information about a <code>SqlInjectionMatchSet</code> (see <a>GetSqlInjectionMatchSet</a>), update a <code>SqlInjectionMatchSet</code> (see <a>UpdateSqlInjectionMatchSet</a>), insert a <code>SqlInjectionMatchSet</code> into a <code>Rule</code> or delete one from a <code>Rule</code> (see <a>UpdateRule</a>), and delete a <code>SqlInjectionMatchSet</code> from AWS WAF (see <a>DeleteSqlInjectionMatchSet</a>).</p> <p> <code>SqlInjectionMatchSetId</code> is returned by <a>CreateSqlInjectionMatchSet</a> and by <a>ListSqlInjectionMatchSets</a>.</p>
   */
  SqlInjectionMatchSetId: string;

  /**
   * <p>The name, if any, of the <code>SqlInjectionMatchSet</code>.</p>
   */
  Name?: string;

  /**
   * <p>Specifies the parts of web requests that you want to inspect for snippets of malicious SQL code.</p>
   */
  SqlInjectionMatchTuples:
    | Array<_SqlInjectionMatchTuple>
    | Iterable<_SqlInjectionMatchTuple>;
}

export interface _UnmarshalledSqlInjectionMatchSet
  extends _SqlInjectionMatchSet {
  /**
   * <p>Specifies the parts of web requests that you want to inspect for snippets of malicious SQL code.</p>
   */
  SqlInjectionMatchTuples: Array<_UnmarshalledSqlInjectionMatchTuple>;
}
