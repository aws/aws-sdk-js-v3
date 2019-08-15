import { _GitConfig } from "./_GitConfig";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateCodeRepositoryInput: _Structure_ = {
  type: "structure",
  required: ["CodeRepositoryName", "GitConfig"],
  members: {
    CodeRepositoryName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    GitConfig: {
      shape: _GitConfig
    }
  }
};
