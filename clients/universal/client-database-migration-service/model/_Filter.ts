import { _FilterValueList } from "./_FilterValueList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Filter: _Structure_ = {
  type: "structure",
  required: ["Name", "Values"],
  members: {
    Name: {
      shape: {
        type: "string"
      }
    },
    Values: {
      shape: _FilterValueList
    }
  }
};
