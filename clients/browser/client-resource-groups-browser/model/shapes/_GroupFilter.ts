import { _GroupFilterValues } from "./_GroupFilterValues";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _GroupFilter: _Structure_ = {
  type: "structure",
  required: ["Name", "Values"],
  members: {
    Name: {
      shape: {
        type: "string"
      }
    },
    Values: {
      shape: _GroupFilterValues
    }
  }
};
