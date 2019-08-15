import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteAcceleratorInput: _Structure_ = {
  type: "structure",
  required: ["AcceleratorArn"],
  members: {
    AcceleratorArn: {
      shape: {
        type: "string"
      }
    }
  }
};
