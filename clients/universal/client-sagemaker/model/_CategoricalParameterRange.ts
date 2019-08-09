import { _ParameterValues } from "./_ParameterValues";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _CategoricalParameterRange: _Structure_ = {
  type: "structure",
  required: ["Name", "Values"],
  members: {
    Name: {
      shape: {
        type: "string"
      }
    },
    Values: {
      shape: _ParameterValues
    }
  }
};
