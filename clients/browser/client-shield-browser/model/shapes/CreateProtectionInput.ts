import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateProtectionInput: _Structure_ = {
  type: "structure",
  required: ["Name", "ResourceArn"],
  members: {
    Name: {
      shape: {
        type: "string",
        min: 1
      }
    },
    ResourceArn: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
