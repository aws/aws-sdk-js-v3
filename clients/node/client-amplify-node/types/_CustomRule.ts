/**
 * <p> Custom rewrite / redirect rule. </p>
 */
export interface _CustomRule {
  /**
   * <p> The source pattern for a URL rewrite or redirect rule. </p>
   */
  source: string;

  /**
   * <p> The target pattern for a URL rewrite or redirect rule. </p>
   */
  target: string;

  /**
   * <p> The status code for a URL rewrite or redirect rule. </p>
   */
  status?: string;

  /**
   * <p> The condition for a URL rewrite or redirect rule, e.g. country code. </p>
   */
  condition?: string;
}

export type _UnmarshalledCustomRule = _CustomRule;
