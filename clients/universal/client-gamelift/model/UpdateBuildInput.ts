import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateBuildInput: _Structure_ = {
  type: "structure",
  required: ["BuildId"],
  members: {
    BuildId: {
      shape: {
        type: "string"
      }
    },
    Name: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Version: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
