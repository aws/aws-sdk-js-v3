/**
 * <p>The term being translated by the custom terminology.</p>
 */
export interface _Term {
  /**
   * <p>The source text of the term being translated by the custom terminology.</p>
   */
  SourceText?: string;

  /**
   * <p>The target text of the term being translated by the custom terminology.</p>
   */
  TargetText?: string;
}

export type _UnmarshalledTerm = _Term;
