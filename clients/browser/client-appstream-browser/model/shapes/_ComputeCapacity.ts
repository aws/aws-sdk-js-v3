import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ComputeCapacity: _Structure_ = {
  type: "structure",
  required: ["DesiredInstances"],
  members: {
    DesiredInstances: {
      shape: {
        type: "integer"
      }
    }
  }
};
