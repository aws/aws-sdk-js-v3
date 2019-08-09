import { _InstanceHealthStatusMap } from "./_InstanceHealthStatusMap";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetInstancesHealthStatusOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Status: {
      shape: _InstanceHealthStatusMap
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
