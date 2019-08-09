import {
  _StackConfigurationManager,
  _UnmarshalledStackConfigurationManager
} from "./_StackConfigurationManager";

/**
 * <p>Describes an agent version.</p>
 */
export interface _AgentVersion {
  /**
   * <p>The agent version.</p>
   */
  Version?: string;

  /**
   * <p>The configuration manager.</p>
   */
  ConfigurationManager?: _StackConfigurationManager;
}

export interface _UnmarshalledAgentVersion extends _AgentVersion {
  /**
   * <p>The configuration manager.</p>
   */
  ConfigurationManager?: _UnmarshalledStackConfigurationManager;
}
