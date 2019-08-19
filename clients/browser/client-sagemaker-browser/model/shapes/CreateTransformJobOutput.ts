import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateTransformJobOutput: _Structure_ = {
  type: "structure",
  required: ["TransformJobArn"],
  members: {
    TransformJobArn: {
      shape: {
        type: "string"
      }
    }
  }
};
