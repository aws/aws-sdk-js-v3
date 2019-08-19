import { _FilterValues } from "./_FilterValues";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _TagFilter: _Structure_ = {
  type: "structure",
  required: ["name", "values"],
  members: {
    name: {
      shape: {
        type: "string"
      }
    },
    values: {
      shape: _FilterValues
    }
  }
};
