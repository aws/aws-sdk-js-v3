import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteInstanceInput: _Structure_ = {
  type: "structure",
  required: ["instanceName"],
  members: {
    instanceName: {
      shape: {
        type: "string"
      }
    }
  }
};
