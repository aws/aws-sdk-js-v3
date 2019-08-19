import {
  _ScriptBootstrapActionConfig,
  _UnmarshalledScriptBootstrapActionConfig
} from "./_ScriptBootstrapActionConfig";

/**
 * <p>Configuration of a bootstrap action.</p>
 */
export interface _BootstrapActionConfig {
  /**
   * <p>The name of the bootstrap action.</p>
   */
  Name: string;

  /**
   * <p>The script run by the bootstrap action.</p>
   */
  ScriptBootstrapAction: _ScriptBootstrapActionConfig;
}

export interface _UnmarshalledBootstrapActionConfig
  extends _BootstrapActionConfig {
  /**
   * <p>The script run by the bootstrap action.</p>
   */
  ScriptBootstrapAction: _UnmarshalledScriptBootstrapActionConfig;
}
