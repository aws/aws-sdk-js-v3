/**
 * <p>A trigger failed to run.</p>
 */
export interface _RepositoryTriggerExecutionFailure {
  /**
   * <p>The name of the trigger that did not run.</p>
   */
  trigger?: string;

  /**
   * <p>Additional message information about the trigger that did not run.</p>
   */
  failureMessage?: string;
}

export type _UnmarshalledRepositoryTriggerExecutionFailure = _RepositoryTriggerExecutionFailure;
