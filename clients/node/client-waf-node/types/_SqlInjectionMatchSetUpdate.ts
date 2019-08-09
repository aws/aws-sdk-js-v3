import {
  _SqlInjectionMatchTuple,
  _UnmarshalledSqlInjectionMatchTuple
} from "./_SqlInjectionMatchTuple";

/**
 * <p>Specifies the part of a web request that you want to inspect for snippets of malicious SQL code and indicates whether you want to add the specification to a <a>SqlInjectionMatchSet</a> or delete it from a <code>SqlInjectionMatchSet</code>.</p>
 */
export interface _SqlInjectionMatchSetUpdate {
  /**
   * <p>Specify <code>INSERT</code> to add a <a>SqlInjectionMatchSetUpdate</a> to a <a>SqlInjectionMatchSet</a>. Use <code>DELETE</code> to remove a <code>SqlInjectionMatchSetUpdate</code> from a <code>SqlInjectionMatchSet</code>.</p>
   */
  Action: "INSERT" | "DELETE" | string;

  /**
   * <p>Specifies the part of a web request that you want AWS WAF to inspect for snippets of malicious SQL code and, if you want AWS WAF to inspect a header, the name of the header.</p>
   */
  SqlInjectionMatchTuple: _SqlInjectionMatchTuple;
}

export interface _UnmarshalledSqlInjectionMatchSetUpdate
  extends _SqlInjectionMatchSetUpdate {
  /**
   * <p>Specifies the part of a web request that you want AWS WAF to inspect for snippets of malicious SQL code and, if you want AWS WAF to inspect a header, the name of the header.</p>
   */
  SqlInjectionMatchTuple: _UnmarshalledSqlInjectionMatchTuple;
}
