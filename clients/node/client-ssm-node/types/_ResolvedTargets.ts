/**
 * <p>Information about targets that resolved during the Automation execution.</p>
 */
export interface _ResolvedTargets {
  /**
   * <p>A list of parameter values sent to targets that resolved during the Automation execution.</p>
   */
  ParameterValues?: Array<string> | Iterable<string>;

  /**
   * <p>A boolean value indicating whether the resolved target list is truncated.</p>
   */
  Truncated?: boolean;
}

export interface _UnmarshalledResolvedTargets extends _ResolvedTargets {
  /**
   * <p>A list of parameter values sent to targets that resolved during the Automation execution.</p>
   */
  ParameterValues?: Array<string>;
}
