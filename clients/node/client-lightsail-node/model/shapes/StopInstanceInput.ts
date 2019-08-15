import { Structure as _Structure_ } from "@aws-sdk/types";

export const StopInstanceInput: _Structure_ = {
  type: "structure",
  required: ["instanceName"],
  members: {
    instanceName: {
      shape: {
        type: "string"
      }
    },
    force: {
      shape: {
        type: "boolean"
      }
    }
  }
};
