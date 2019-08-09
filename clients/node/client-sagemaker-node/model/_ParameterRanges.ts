import { _IntegerParameterRanges } from "./_IntegerParameterRanges";
import { _ContinuousParameterRanges } from "./_ContinuousParameterRanges";
import { _CategoricalParameterRanges } from "./_CategoricalParameterRanges";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ParameterRanges: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    IntegerParameterRanges: {
      shape: _IntegerParameterRanges
    },
    ContinuousParameterRanges: {
      shape: _ContinuousParameterRanges
    },
    CategoricalParameterRanges: {
      shape: _CategoricalParameterRanges
    }
  }
};
