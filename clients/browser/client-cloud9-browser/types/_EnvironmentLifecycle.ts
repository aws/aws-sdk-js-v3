/**
 * <p>Information about the current creation or deletion lifecycle state of an AWS Cloud9 development environment.</p>
 */
export interface _EnvironmentLifecycle {
  /**
   * <p>The current creation or deletion lifecycle state of the environment.</p> <ul> <li> <p> <code>CREATED</code>: The environment was successfully created.</p> </li> <li> <p> <code>DELETE_FAILED</code>: The environment failed to delete.</p> </li> <li> <p> <code>DELETING</code>: The environment is in the process of being deleted.</p> </li> </ul>
   */
  status?: "CREATED" | "DELETING" | "DELETE_FAILED" | string;

  /**
   * <p>Any informational message about the lifecycle state of the environment.</p>
   */
  reason?: string;

  /**
   * <p>If the environment failed to delete, the Amazon Resource Name (ARN) of the related AWS resource.</p>
   */
  failureResource?: string;
}

export type _UnmarshalledEnvironmentLifecycle = _EnvironmentLifecycle;
