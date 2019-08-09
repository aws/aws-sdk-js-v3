import { _Problem, _UnmarshalledProblem } from "./_Problem";

/**
 * <p>A collection of one or more problems, grouped by their result.</p>
 */
export interface _UniqueProblem {
  /**
   * <p>A message about the unique problems' result.</p>
   */
  message?: string;

  /**
   * <p>Information about the problems.</p>
   */
  problems?: Array<_Problem> | Iterable<_Problem>;
}

export interface _UnmarshalledUniqueProblem extends _UniqueProblem {
  /**
   * <p>Information about the problems.</p>
   */
  problems?: Array<_UnmarshalledProblem>;
}
