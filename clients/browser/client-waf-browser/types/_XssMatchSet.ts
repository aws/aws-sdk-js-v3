import { _XssMatchTuple, _UnmarshalledXssMatchTuple } from "./_XssMatchTuple";

/**
 * <p>A complex type that contains <code>XssMatchTuple</code> objects, which specify the parts of web requests that you want AWS WAF to inspect for cross-site scripting attacks and, if you want AWS WAF to inspect a header, the name of the header. If a <code>XssMatchSet</code> contains more than one <code>XssMatchTuple</code> object, a request needs to include cross-site scripting attacks in only one of the specified parts of the request to be considered a match.</p>
 */
export interface _XssMatchSet {
  /**
   * <p>A unique identifier for an <code>XssMatchSet</code>. You use <code>XssMatchSetId</code> to get information about an <code>XssMatchSet</code> (see <a>GetXssMatchSet</a>), update an <code>XssMatchSet</code> (see <a>UpdateXssMatchSet</a>), insert an <code>XssMatchSet</code> into a <code>Rule</code> or delete one from a <code>Rule</code> (see <a>UpdateRule</a>), and delete an <code>XssMatchSet</code> from AWS WAF (see <a>DeleteXssMatchSet</a>).</p> <p> <code>XssMatchSetId</code> is returned by <a>CreateXssMatchSet</a> and by <a>ListXssMatchSets</a>.</p>
   */
  XssMatchSetId: string;

  /**
   * <p>The name, if any, of the <code>XssMatchSet</code>.</p>
   */
  Name?: string;

  /**
   * <p>Specifies the parts of web requests that you want to inspect for cross-site scripting attacks.</p>
   */
  XssMatchTuples: Array<_XssMatchTuple> | Iterable<_XssMatchTuple>;
}

export interface _UnmarshalledXssMatchSet extends _XssMatchSet {
  /**
   * <p>Specifies the parts of web requests that you want to inspect for cross-site scripting attacks.</p>
   */
  XssMatchTuples: Array<_UnmarshalledXssMatchTuple>;
}
