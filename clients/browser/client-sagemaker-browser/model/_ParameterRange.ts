import { _IntegerParameterRangeSpecification } from "./_IntegerParameterRangeSpecification";
import { _ContinuousParameterRangeSpecification } from "./_ContinuousParameterRangeSpecification";
import { _CategoricalParameterRangeSpecification } from "./_CategoricalParameterRangeSpecification";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ParameterRange: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    IntegerParameterRangeSpecification: {
      shape: _IntegerParameterRangeSpecification
    },
    ContinuousParameterRangeSpecification: {
      shape: _ContinuousParameterRangeSpecification
    },
    CategoricalParameterRangeSpecification: {
      shape: _CategoricalParameterRangeSpecification
    }
  }
};
