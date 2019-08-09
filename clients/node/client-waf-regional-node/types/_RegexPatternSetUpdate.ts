/**
 * <p>In an <a>UpdateRegexPatternSet</a> request, <code>RegexPatternSetUpdate</code> specifies whether to insert or delete a <code>RegexPatternString</code> and includes the settings for the <code>RegexPatternString</code>.</p>
 */
export interface _RegexPatternSetUpdate {
  /**
   * <p>Specifies whether to insert or delete a <code>RegexPatternString</code>.</p>
   */
  Action: "INSERT" | "DELETE" | string;

  /**
   * <p>Specifies the regular expression (regex) pattern that you want AWS WAF to search for, such as <code>B[a@]dB[o0]t</code>.</p>
   */
  RegexPatternString: string;
}

export type _UnmarshalledRegexPatternSetUpdate = _RegexPatternSetUpdate;
