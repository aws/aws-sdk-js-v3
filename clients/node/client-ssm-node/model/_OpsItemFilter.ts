import { _OpsItemFilterValues } from "./_OpsItemFilterValues";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _OpsItemFilter: _Structure_ = {
  type: "structure",
  required: ["Key", "Values", "Operator"],
  members: {
    Key: {
      shape: {
        type: "string"
      }
    },
    Values: {
      shape: _OpsItemFilterValues
    },
    Operator: {
      shape: {
        type: "string"
      }
    }
  }
};
