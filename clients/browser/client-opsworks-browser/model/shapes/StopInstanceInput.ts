import { Structure as _Structure_ } from "@aws-sdk/types";

export const StopInstanceInput: _Structure_ = {
  type: "structure",
  required: ["InstanceId"],
  members: {
    InstanceId: {
      shape: {
        type: "string"
      }
    },
    Force: {
      shape: {
        type: "boolean"
      }
    }
  }
};
