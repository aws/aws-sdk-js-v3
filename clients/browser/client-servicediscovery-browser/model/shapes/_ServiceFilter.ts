import { _FilterValues } from "./_FilterValues";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ServiceFilter: _Structure_ = {
  type: "structure",
  required: ["Name", "Values"],
  members: {
    Name: {
      shape: {
        type: "string"
      }
    },
    Values: {
      shape: _FilterValues
    },
    Condition: {
      shape: {
        type: "string"
      }
    }
  }
};
