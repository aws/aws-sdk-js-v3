import { _ParameterValues } from "./_ParameterValues";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _CategoricalParameterRangeSpecification: _Structure_ = {
  type: "structure",
  required: ["Values"],
  members: {
    Values: {
      shape: _ParameterValues
    }
  }
};
