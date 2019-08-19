import {
  _IntegerHyperParameterRange,
  _UnmarshalledIntegerHyperParameterRange
} from "./_IntegerHyperParameterRange";
import {
  _ContinuousHyperParameterRange,
  _UnmarshalledContinuousHyperParameterRange
} from "./_ContinuousHyperParameterRange";
import {
  _CategoricalHyperParameterRange,
  _UnmarshalledCategoricalHyperParameterRange
} from "./_CategoricalHyperParameterRange";

/**
 * <p>Specifies the hyperparameters and their ranges. Hyperparameters can be categorical, continuous, or integer-valued.</p>
 */
export interface _HyperParameterRanges {
  /**
   * <p>The integer-valued hyperparameters and their ranges.</p>
   */
  integerHyperParameterRanges?:
    | Array<_IntegerHyperParameterRange>
    | Iterable<_IntegerHyperParameterRange>;

  /**
   * <p>The continuous hyperparameters and their ranges.</p>
   */
  continuousHyperParameterRanges?:
    | Array<_ContinuousHyperParameterRange>
    | Iterable<_ContinuousHyperParameterRange>;

  /**
   * <p>The categorical hyperparameters and their ranges.</p>
   */
  categoricalHyperParameterRanges?:
    | Array<_CategoricalHyperParameterRange>
    | Iterable<_CategoricalHyperParameterRange>;
}

export interface _UnmarshalledHyperParameterRanges
  extends _HyperParameterRanges {
  /**
   * <p>The integer-valued hyperparameters and their ranges.</p>
   */
  integerHyperParameterRanges?: Array<_UnmarshalledIntegerHyperParameterRange>;

  /**
   * <p>The continuous hyperparameters and their ranges.</p>
   */
  continuousHyperParameterRanges?: Array<
    _UnmarshalledContinuousHyperParameterRange
  >;

  /**
   * <p>The categorical hyperparameters and their ranges.</p>
   */
  categoricalHyperParameterRanges?: Array<
    _UnmarshalledCategoricalHyperParameterRange
  >;
}
