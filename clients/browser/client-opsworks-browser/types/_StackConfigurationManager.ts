/**
 * <p>Describes the configuration manager.</p>
 */
export interface _StackConfigurationManager {
  /**
   * <p>The name. This parameter must be set to "Chef".</p>
   */
  Name?: string;

  /**
   * <p>The Chef version. This parameter must be set to 12, 11.10, or 11.4 for Linux stacks, and to 12.2 for Windows stacks. The default value for Linux stacks is 11.4.</p>
   */
  Version?: string;
}

export type _UnmarshalledStackConfigurationManager = _StackConfigurationManager;
