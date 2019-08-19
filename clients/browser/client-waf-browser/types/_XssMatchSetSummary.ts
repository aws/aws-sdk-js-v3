/**
 * <p>The <code>Id</code> and <code>Name</code> of an <code>XssMatchSet</code>.</p>
 */
export interface _XssMatchSetSummary {
  /**
   * <p>A unique identifier for an <code>XssMatchSet</code>. You use <code>XssMatchSetId</code> to get information about a <code>XssMatchSet</code> (see <a>GetXssMatchSet</a>), update an <code>XssMatchSet</code> (see <a>UpdateXssMatchSet</a>), insert an <code>XssMatchSet</code> into a <code>Rule</code> or delete one from a <code>Rule</code> (see <a>UpdateRule</a>), and delete an <code>XssMatchSet</code> from AWS WAF (see <a>DeleteXssMatchSet</a>).</p> <p> <code>XssMatchSetId</code> is returned by <a>CreateXssMatchSet</a> and by <a>ListXssMatchSets</a>.</p>
   */
  XssMatchSetId: string;

  /**
   * <p>The name of the <code>XssMatchSet</code>, if any, specified by <code>Id</code>.</p>
   */
  Name: string;
}

export type _UnmarshalledXssMatchSetSummary = _XssMatchSetSummary;
