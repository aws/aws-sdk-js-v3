import {
  _AlgorithmImage,
  _UnmarshalledAlgorithmImage
} from "./_AlgorithmImage";
import {
  _DefaultHyperParameterRanges,
  _UnmarshalledDefaultHyperParameterRanges
} from "./_DefaultHyperParameterRanges";

/**
 * <p>Describes a custom algorithm.</p>
 */
export interface _Algorithm {
  /**
   * <p>The name of the algorithm.</p>
   */
  name?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the algorithm.</p>
   */
  algorithmArn?: string;

  /**
   * <p>The URI of the Docker container for the algorithm image.</p>
   */
  algorithmImage?: _AlgorithmImage;

  /**
   * <p>Specifies the default hyperparameters.</p>
   */
  defaultHyperParameters?:
    | { [key: string]: string }
    | Iterable<[string, string]>;

  /**
   * <p>Specifies the default hyperparameters, their ranges, and whether they are tunable. A tunable hyperparameter can have its value determined during hyperparameter optimization (HPO).</p>
   */
  defaultHyperParameterRanges?: _DefaultHyperParameterRanges;

  /**
   * <p>Specifies the default maximum number of training jobs and parallel training jobs.</p>
   */
  defaultResourceConfig?:
    | { [key: string]: string }
    | Iterable<[string, string]>;

  /**
   * <p>The training input mode.</p>
   */
  trainingInputMode?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the role.</p>
   */
  roleArn?: string;

  /**
   * <p>The date and time (in Unix time) that the algorithm was created.</p>
   */
  creationDateTime?: Date | string | number;

  /**
   * <p>The date and time (in Unix time) that the algorithm was last updated.</p>
   */
  lastUpdatedDateTime?: Date | string | number;
}

export interface _UnmarshalledAlgorithm extends _Algorithm {
  /**
   * <p>The URI of the Docker container for the algorithm image.</p>
   */
  algorithmImage?: _UnmarshalledAlgorithmImage;

  /**
   * <p>Specifies the default hyperparameters.</p>
   */
  defaultHyperParameters?: { [key: string]: string };

  /**
   * <p>Specifies the default hyperparameters, their ranges, and whether they are tunable. A tunable hyperparameter can have its value determined during hyperparameter optimization (HPO).</p>
   */
  defaultHyperParameterRanges?: _UnmarshalledDefaultHyperParameterRanges;

  /**
   * <p>Specifies the default maximum number of training jobs and parallel training jobs.</p>
   */
  defaultResourceConfig?: { [key: string]: string };

  /**
   * <p>The date and time (in Unix time) that the algorithm was created.</p>
   */
  creationDateTime?: Date;

  /**
   * <p>The date and time (in Unix time) that the algorithm was last updated.</p>
   */
  lastUpdatedDateTime?: Date;
}
