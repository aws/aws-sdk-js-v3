import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteInstanceProfileInput: _Structure_ = {
  type: "structure",
  required: ["InstanceProfileName"],
  members: {
    InstanceProfileName: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
