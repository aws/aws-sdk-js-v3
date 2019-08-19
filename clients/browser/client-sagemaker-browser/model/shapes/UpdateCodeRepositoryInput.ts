import { _GitConfigForUpdate } from "./_GitConfigForUpdate";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateCodeRepositoryInput: _Structure_ = {
  type: "structure",
  required: ["CodeRepositoryName"],
  members: {
    CodeRepositoryName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    GitConfig: {
      shape: _GitConfigForUpdate
    }
  }
};
