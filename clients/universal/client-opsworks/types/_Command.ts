/**
 * <p>Describes a command.</p>
 */
export interface _Command {
  /**
   * <p>The command ID.</p>
   */
  CommandId?: string;

  /**
   * <p>The ID of the instance where the command was executed.</p>
   */
  InstanceId?: string;

  /**
   * <p>The command deployment ID.</p>
   */
  DeploymentId?: string;

  /**
   * <p>Date and time when the command was run.</p>
   */
  CreatedAt?: string;

  /**
   * <p>Date and time when the command was acknowledged.</p>
   */
  AcknowledgedAt?: string;

  /**
   * <p>Date when the command completed.</p>
   */
  CompletedAt?: string;

  /**
   * <p>The command status:</p> <ul> <li> <p>failed</p> </li> <li> <p>successful</p> </li> <li> <p>skipped</p> </li> <li> <p>pending</p> </li> </ul>
   */
  Status?: string;

  /**
   * <p>The command exit code.</p>
   */
  ExitCode?: number;

  /**
   * <p>The URL of the command log.</p>
   */
  LogUrl?: string;

  /**
   * <p>The command type:</p> <ul> <li> <p> <code>configure</code> </p> </li> <li> <p> <code>deploy</code> </p> </li> <li> <p> <code>execute_recipes</code> </p> </li> <li> <p> <code>install_dependencies</code> </p> </li> <li> <p> <code>restart</code> </p> </li> <li> <p> <code>rollback</code> </p> </li> <li> <p> <code>setup</code> </p> </li> <li> <p> <code>start</code> </p> </li> <li> <p> <code>stop</code> </p> </li> <li> <p> <code>undeploy</code> </p> </li> <li> <p> <code>update_custom_cookbooks</code> </p> </li> <li> <p> <code>update_dependencies</code> </p> </li> </ul>
   */
  Type?: string;
}

export type _UnmarshalledCommand = _Command;
