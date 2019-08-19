import { _DefaultIntegerHyperParameterRanges } from "./_DefaultIntegerHyperParameterRanges";
import { _DefaultContinuousHyperParameterRanges } from "./_DefaultContinuousHyperParameterRanges";
import { _DefaultCategoricalHyperParameterRanges } from "./_DefaultCategoricalHyperParameterRanges";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _DefaultHyperParameterRanges: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    integerHyperParameterRanges: {
      shape: _DefaultIntegerHyperParameterRanges
    },
    continuousHyperParameterRanges: {
      shape: _DefaultContinuousHyperParameterRanges
    },
    categoricalHyperParameterRanges: {
      shape: _DefaultCategoricalHyperParameterRanges
    }
  }
};
