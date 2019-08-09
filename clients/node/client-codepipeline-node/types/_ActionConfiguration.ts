/**
 * <p>Represents information about an action configuration.</p>
 */
export interface _ActionConfiguration {
  /**
   * <p>The configuration data for the action.</p>
   */
  configuration?: { [key: string]: string } | Iterable<[string, string]>;
}

export interface _UnmarshalledActionConfiguration extends _ActionConfiguration {
  /**
   * <p>The configuration data for the action.</p>
   */
  configuration?: { [key: string]: string };
}
