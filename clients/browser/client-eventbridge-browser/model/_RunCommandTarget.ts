import { _RunCommandTargetValues } from "./_RunCommandTargetValues";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _RunCommandTarget: _Structure_ = {
  type: "structure",
  required: ["Key", "Values"],
  members: {
    Key: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Values: {
      shape: _RunCommandTargetValues
    }
  }
};
