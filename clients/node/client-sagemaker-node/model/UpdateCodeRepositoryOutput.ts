import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateCodeRepositoryOutput: _Structure_ = {
  type: "structure",
  required: ["CodeRepositoryArn"],
  members: {
    CodeRepositoryArn: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
