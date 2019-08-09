/**
 * <p>An entity describing an executable that runs on a cluster.</p>
 */
export interface _Command {
  /**
   * <p>The name of the command.</p>
   */
  Name?: string;

  /**
   * <p>The Amazon S3 location of the command script.</p>
   */
  ScriptPath?: string;

  /**
   * <p>Arguments for Amazon EMR to pass to the command for execution.</p>
   */
  Args?: Array<string> | Iterable<string>;
}

export interface _UnmarshalledCommand extends _Command {
  /**
   * <p>Arguments for Amazon EMR to pass to the command for execution.</p>
   */
  Args?: Array<string>;
}
