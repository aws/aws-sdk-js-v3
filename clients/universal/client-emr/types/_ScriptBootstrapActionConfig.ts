/**
 * <p>Configuration of the script to run during a bootstrap action.</p>
 */
export interface _ScriptBootstrapActionConfig {
  /**
   * <p>Location of the script to run during a bootstrap action. Can be either a location in Amazon S3 or on a local file system.</p>
   */
  Path: string;

  /**
   * <p>A list of command line arguments to pass to the bootstrap action script.</p>
   */
  Args?: Array<string> | Iterable<string>;
}

export interface _UnmarshalledScriptBootstrapActionConfig
  extends _ScriptBootstrapActionConfig {
  /**
   * <p>A list of command line arguments to pass to the bootstrap action script.</p>
   */
  Args?: Array<string>;
}
