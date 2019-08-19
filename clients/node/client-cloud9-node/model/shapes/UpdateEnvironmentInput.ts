import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateEnvironmentInput: _Structure_ = {
  type: "structure",
  required: ["environmentId"],
  members: {
    environmentId: {
      shape: {
        type: "string"
      }
    },
    name: {
      shape: {
        type: "string",
        min: 1
      }
    },
    description: {
      shape: {
        type: "string",
        sensitive: true
      }
    }
  }
};
