import { _FilterValues } from "./_FilterValues";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Filter: _Structure_ = {
  type: "structure",
  required: ["name", "values", "condition"],
  members: {
    name: {
      shape: {
        type: "string"
      }
    },
    values: {
      shape: _FilterValues
    },
    condition: {
      shape: {
        type: "string"
      }
    }
  }
};
