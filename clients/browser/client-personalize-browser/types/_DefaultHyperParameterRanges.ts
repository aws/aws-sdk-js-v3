import {
  _DefaultIntegerHyperParameterRange,
  _UnmarshalledDefaultIntegerHyperParameterRange
} from "./_DefaultIntegerHyperParameterRange";
import {
  _DefaultContinuousHyperParameterRange,
  _UnmarshalledDefaultContinuousHyperParameterRange
} from "./_DefaultContinuousHyperParameterRange";
import {
  _DefaultCategoricalHyperParameterRange,
  _UnmarshalledDefaultCategoricalHyperParameterRange
} from "./_DefaultCategoricalHyperParameterRange";

/**
 * <p>Specifies the hyperparameters and their default ranges. Hyperparameters can be categorical, continuous, or integer-valued.</p>
 */
export interface _DefaultHyperParameterRanges {
  /**
   * <p>The integer-valued hyperparameters and their default ranges.</p>
   */
  integerHyperParameterRanges?:
    | Array<_DefaultIntegerHyperParameterRange>
    | Iterable<_DefaultIntegerHyperParameterRange>;

  /**
   * <p>The continuous hyperparameters and their default ranges.</p>
   */
  continuousHyperParameterRanges?:
    | Array<_DefaultContinuousHyperParameterRange>
    | Iterable<_DefaultContinuousHyperParameterRange>;

  /**
   * <p>The categorical hyperparameters and their default ranges.</p>
   */
  categoricalHyperParameterRanges?:
    | Array<_DefaultCategoricalHyperParameterRange>
    | Iterable<_DefaultCategoricalHyperParameterRange>;
}

export interface _UnmarshalledDefaultHyperParameterRanges
  extends _DefaultHyperParameterRanges {
  /**
   * <p>The integer-valued hyperparameters and their default ranges.</p>
   */
  integerHyperParameterRanges?: Array<
    _UnmarshalledDefaultIntegerHyperParameterRange
  >;

  /**
   * <p>The continuous hyperparameters and their default ranges.</p>
   */
  continuousHyperParameterRanges?: Array<
    _UnmarshalledDefaultContinuousHyperParameterRange
  >;

  /**
   * <p>The categorical hyperparameters and their default ranges.</p>
   */
  categoricalHyperParameterRanges?: Array<
    _UnmarshalledDefaultCategoricalHyperParameterRange
  >;
}
