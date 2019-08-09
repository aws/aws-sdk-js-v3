import { _InstancePatchStateFilterValues } from "./_InstancePatchStateFilterValues";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _InstancePatchStateFilter: _Structure_ = {
  type: "structure",
  required: ["Key", "Values", "Type"],
  members: {
    Key: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Values: {
      shape: _InstancePatchStateFilterValues
    },
    Type: {
      shape: {
        type: "string"
      }
    }
  }
};
