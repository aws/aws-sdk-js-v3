import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetProjectInput: _Structure_ = {
  type: "structure",
  required: ["arn"],
  members: {
    arn: {
      shape: {
        type: "string",
        min: 32
      }
    }
  }
};
