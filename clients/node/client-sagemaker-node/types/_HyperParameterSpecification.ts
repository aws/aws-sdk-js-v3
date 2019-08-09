import {
  _ParameterRange,
  _UnmarshalledParameterRange
} from "./_ParameterRange";

/**
 * <p>Defines a hyperparameter to be used by an algorithm.</p>
 */
export interface _HyperParameterSpecification {
  /**
   * <p>The name of this hyperparameter. The name must be unique.</p>
   */
  Name: string;

  /**
   * <p>A brief description of the hyperparameter.</p>
   */
  Description?: string;

  /**
   * <p>The type of this hyperparameter. The valid types are <code>Integer</code>, <code>Continuous</code>, <code>Categorical</code>, and <code>FreeText</code>.</p>
   */
  Type: "Integer" | "Continuous" | "Categorical" | "FreeText" | string;

  /**
   * <p>The allowed range for this hyperparameter.</p>
   */
  Range?: _ParameterRange;

  /**
   * <p>Indicates whether this hyperparameter is tunable in a hyperparameter tuning job.</p>
   */
  IsTunable?: boolean;

  /**
   * <p>Indicates whether this hyperparameter is required.</p>
   */
  IsRequired?: boolean;

  /**
   * <p>The default value for this hyperparameter. If a default value is specified, a hyperparameter cannot be required.</p>
   */
  DefaultValue?: string;
}

export interface _UnmarshalledHyperParameterSpecification
  extends _HyperParameterSpecification {
  /**
   * <p>The allowed range for this hyperparameter.</p>
   */
  Range?: _UnmarshalledParameterRange;
}
