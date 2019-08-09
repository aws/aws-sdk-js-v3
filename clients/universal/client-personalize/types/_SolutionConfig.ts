import { _HPOConfig, _UnmarshalledHPOConfig } from "./_HPOConfig";
import { _AutoMLConfig, _UnmarshalledAutoMLConfig } from "./_AutoMLConfig";

/**
 * <p>Describes the configuration properties for the solution.</p>
 */
export interface _SolutionConfig {
  /**
   * <p>Only events with a value greater than or equal to this threshold are used for training a model.</p>
   */
  eventValueThreshold?: string;

  /**
   * <p>Describes the properties for hyperparameter optimization (HPO). For use with the bring-your-own-recipe feature. Not used with Amazon Personalize predefined recipes.</p>
   */
  hpoConfig?: _HPOConfig;

  /**
   * <p>Lists the hyperparameter names and ranges.</p>
   */
  algorithmHyperParameters?:
    | { [key: string]: string }
    | Iterable<[string, string]>;

  /**
   * <p>Lists the feature transformation parameters.</p>
   */
  featureTransformationParameters?:
    | { [key: string]: string }
    | Iterable<[string, string]>;

  /**
   * <p>The <a>AutoMLConfig</a> object containing a list of recipes to search when AutoML is performed.</p>
   */
  autoMLConfig?: _AutoMLConfig;
}

export interface _UnmarshalledSolutionConfig extends _SolutionConfig {
  /**
   * <p>Describes the properties for hyperparameter optimization (HPO). For use with the bring-your-own-recipe feature. Not used with Amazon Personalize predefined recipes.</p>
   */
  hpoConfig?: _UnmarshalledHPOConfig;

  /**
   * <p>Lists the hyperparameter names and ranges.</p>
   */
  algorithmHyperParameters?: { [key: string]: string };

  /**
   * <p>Lists the feature transformation parameters.</p>
   */
  featureTransformationParameters?: { [key: string]: string };

  /**
   * <p>The <a>AutoMLConfig</a> object containing a list of recipes to search when AutoML is performed.</p>
   */
  autoMLConfig?: _UnmarshalledAutoMLConfig;
}
