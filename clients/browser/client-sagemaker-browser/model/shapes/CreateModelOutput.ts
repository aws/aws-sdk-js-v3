import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateModelOutput: _Structure_ = {
  type: "structure",
  required: ["ModelArn"],
  members: {
    ModelArn: {
      shape: {
        type: "string",
        min: 20
      }
    }
  }
};
