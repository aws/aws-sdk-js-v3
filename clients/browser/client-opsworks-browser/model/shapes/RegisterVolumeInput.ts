import { Structure as _Structure_ } from "@aws-sdk/types";

export const RegisterVolumeInput: _Structure_ = {
  type: "structure",
  required: ["StackId"],
  members: {
    Ec2VolumeId: {
      shape: {
        type: "string"
      }
    },
    StackId: {
      shape: {
        type: "string"
      }
    }
  }
};
