/**
 * <p>The input configuration for a canary deployment.</p>
 */
export interface _DeploymentCanarySettings {
  /**
   * <p>The percentage (0.0-100.0) of traffic routed to the canary deployment.</p>
   */
  percentTraffic?: number;

  /**
   * <p>A stage variable overrides used for the canary release deployment. They can override existing stage variables or add new stage variables for the canary release deployment. These stage variables are represented as a string-to-string map between stage variable names and their values.</p>
   */
  stageVariableOverrides?:
    | { [key: string]: string }
    | Iterable<[string, string]>;

  /**
   * <p>A Boolean flag to indicate whether the canary release deployment uses the stage cache or not.</p>
   */
  useStageCache?: boolean;
}

export interface _UnmarshalledDeploymentCanarySettings
  extends _DeploymentCanarySettings {
  /**
   * <p>A stage variable overrides used for the canary release deployment. They can override existing stage variables or add new stage variables for the canary release deployment. These stage variables are represented as a string-to-string map between stage variable names and their values.</p>
   */
  stageVariableOverrides?: { [key: string]: string };
}
