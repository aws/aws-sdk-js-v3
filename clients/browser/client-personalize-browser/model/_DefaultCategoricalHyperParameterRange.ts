import { _CategoricalValues } from "./_CategoricalValues";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _DefaultCategoricalHyperParameterRange: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    name: {
      shape: {
        type: "string"
      }
    },
    values: {
      shape: _CategoricalValues
    },
    isTunable: {
      shape: {
        type: "boolean"
      }
    }
  }
};
