import { _HPOObjective, _UnmarshalledHPOObjective } from "./_HPOObjective";
import {
  _HPOResourceConfig,
  _UnmarshalledHPOResourceConfig
} from "./_HPOResourceConfig";
import {
  _HyperParameterRanges,
  _UnmarshalledHyperParameterRanges
} from "./_HyperParameterRanges";

/**
 * <p>Describes the properties for hyperparameter optimization (HPO). For use with the bring-your-own-recipe feature. Do not use for Amazon Personalize native recipes.</p>
 */
export interface _HPOConfig {
  /**
   * <p>The metric to optimize during HPO.</p>
   */
  hpoObjective?: _HPOObjective;

  /**
   * <p>Describes the resource configuration for HPO.</p>
   */
  hpoResourceConfig?: _HPOResourceConfig;

  /**
   * <p>The hyperparameters and their allowable ranges.</p>
   */
  algorithmHyperParameterRanges?: _HyperParameterRanges;
}

export interface _UnmarshalledHPOConfig extends _HPOConfig {
  /**
   * <p>The metric to optimize during HPO.</p>
   */
  hpoObjective?: _UnmarshalledHPOObjective;

  /**
   * <p>Describes the resource configuration for HPO.</p>
   */
  hpoResourceConfig?: _UnmarshalledHPOResourceConfig;

  /**
   * <p>The hyperparameters and their allowable ranges.</p>
   */
  algorithmHyperParameterRanges?: _UnmarshalledHyperParameterRanges;
}
