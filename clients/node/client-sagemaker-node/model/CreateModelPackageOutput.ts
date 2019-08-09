import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateModelPackageOutput: _Structure_ = {
  type: "structure",
  required: ["ModelPackageArn"],
  members: {
    ModelPackageArn: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
