import { _IntegerHyperParameterRanges } from "./_IntegerHyperParameterRanges";
import { _ContinuousHyperParameterRanges } from "./_ContinuousHyperParameterRanges";
import { _CategoricalHyperParameterRanges } from "./_CategoricalHyperParameterRanges";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _HyperParameterRanges: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    integerHyperParameterRanges: {
      shape: _IntegerHyperParameterRanges
    },
    continuousHyperParameterRanges: {
      shape: _ContinuousHyperParameterRanges
    },
    categoricalHyperParameterRanges: {
      shape: _CategoricalHyperParameterRanges
    }
  }
};
