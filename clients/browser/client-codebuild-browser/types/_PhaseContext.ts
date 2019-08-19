/**
 * <p>Additional information about a build phase that has an error. You can use this information for troubleshooting.</p>
 */
export interface _PhaseContext {
  /**
   * <p>The status code for the context of the build phase.</p>
   */
  statusCode?: string;

  /**
   * <p>An explanation of the build phase's context. This might include a command ID and an exit code.</p>
   */
  message?: string;
}

export type _UnmarshalledPhaseContext = _PhaseContext;
