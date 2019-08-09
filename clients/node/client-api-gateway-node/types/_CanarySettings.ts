/**
 * <p>Configuration settings of a canary deployment.</p>
 */
export interface _CanarySettings {
  /**
   * <p>The percent (0-100) of traffic diverted to a canary deployment.</p>
   */
  percentTraffic?: number;

  /**
   * <p>The ID of the canary deployment.</p>
   */
  deploymentId?: string;

  /**
   * <p>Stage variables overridden for a canary release deployment, including new stage variables introduced in the canary. These stage variables are represented as a string-to-string map between stage variable names and their values.</p>
   */
  stageVariableOverrides?:
    | { [key: string]: string }
    | Iterable<[string, string]>;

  /**
   * <p>A Boolean flag to indicate whether the canary deployment uses the stage cache or not.</p>
   */
  useStageCache?: boolean;
}

export interface _UnmarshalledCanarySettings extends _CanarySettings {
  /**
   * <p>Stage variables overridden for a canary release deployment, including new stage variables introduced in the canary. These stage variables are represented as a string-to-string map between stage variable names and their values.</p>
   */
  stageVariableOverrides?: { [key: string]: string };
}
