import {
  _RegexMatchTuple,
  _UnmarshalledRegexMatchTuple
} from "./_RegexMatchTuple";

/**
 * <p>In an <a>UpdateRegexMatchSet</a> request, <code>RegexMatchSetUpdate</code> specifies whether to insert or delete a <a>RegexMatchTuple</a> and includes the settings for the <code>RegexMatchTuple</code>.</p>
 */
export interface _RegexMatchSetUpdate {
  /**
   * <p>Specifies whether to insert or delete a <a>RegexMatchTuple</a>.</p>
   */
  Action: "INSERT" | "DELETE" | string;

  /**
   * <p>Information about the part of a web request that you want AWS WAF to inspect and the identifier of the regular expression (regex) pattern that you want AWS WAF to search for. If you specify <code>DELETE</code> for the value of <code>Action</code>, the <code>RegexMatchTuple</code> values must exactly match the values in the <code>RegexMatchTuple</code> that you want to delete from the <code>RegexMatchSet</code>.</p>
   */
  RegexMatchTuple: _RegexMatchTuple;
}

export interface _UnmarshalledRegexMatchSetUpdate extends _RegexMatchSetUpdate {
  /**
   * <p>Information about the part of a web request that you want AWS WAF to inspect and the identifier of the regular expression (regex) pattern that you want AWS WAF to search for. If you specify <code>DELETE</code> for the value of <code>Action</code>, the <code>RegexMatchTuple</code> values must exactly match the values in the <code>RegexMatchTuple</code> that you want to delete from the <code>RegexMatchSet</code>.</p>
   */
  RegexMatchTuple: _UnmarshalledRegexMatchTuple;
}
