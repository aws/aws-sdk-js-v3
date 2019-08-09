import { _XssMatchTuple, _UnmarshalledXssMatchTuple } from "./_XssMatchTuple";

/**
 * <p>Specifies the part of a web request that you want to inspect for cross-site scripting attacks and indicates whether you want to add the specification to an <a>XssMatchSet</a> or delete it from an <code>XssMatchSet</code>.</p>
 */
export interface _XssMatchSetUpdate {
  /**
   * <p>Specify <code>INSERT</code> to add an <a>XssMatchSetUpdate</a> to an <a>XssMatchSet</a>. Use <code>DELETE</code> to remove an <code>XssMatchSetUpdate</code> from an <code>XssMatchSet</code>.</p>
   */
  Action: "INSERT" | "DELETE" | string;

  /**
   * <p>Specifies the part of a web request that you want AWS WAF to inspect for cross-site scripting attacks and, if you want AWS WAF to inspect a header, the name of the header.</p>
   */
  XssMatchTuple: _XssMatchTuple;
}

export interface _UnmarshalledXssMatchSetUpdate extends _XssMatchSetUpdate {
  /**
   * <p>Specifies the part of a web request that you want AWS WAF to inspect for cross-site scripting attacks and, if you want AWS WAF to inspect a header, the name of the header.</p>
   */
  XssMatchTuple: _UnmarshalledXssMatchTuple;
}
