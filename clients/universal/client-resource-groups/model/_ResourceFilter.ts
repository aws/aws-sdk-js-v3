import { _ResourceFilterValues } from "./_ResourceFilterValues";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ResourceFilter: _Structure_ = {
  type: "structure",
  required: ["Name", "Values"],
  members: {
    Name: {
      shape: {
        type: "string"
      }
    },
    Values: {
      shape: _ResourceFilterValues
    }
  }
};
