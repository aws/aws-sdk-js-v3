import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteHsmInput: _Structure_ = {
  type: "structure",
  required: ["HsmArn"],
  members: {
    HsmArn: {
      shape: {
        type: "string"
      },
      locationName: "HsmArn"
    }
  }
};
