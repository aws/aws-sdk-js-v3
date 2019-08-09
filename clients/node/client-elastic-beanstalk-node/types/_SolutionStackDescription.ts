/**
 * <p>Describes the solution stack.</p>
 */
export interface _SolutionStackDescription {
  /**
   * <p>The name of the solution stack.</p>
   */
  SolutionStackName?: string;

  /**
   * <p>The permitted file types allowed for a solution stack.</p>
   */
  PermittedFileTypes?: Array<string> | Iterable<string>;
}

export interface _UnmarshalledSolutionStackDescription
  extends _SolutionStackDescription {
  /**
   * <p>The permitted file types allowed for a solution stack.</p>
   */
  PermittedFileTypes?: Array<string>;
}
