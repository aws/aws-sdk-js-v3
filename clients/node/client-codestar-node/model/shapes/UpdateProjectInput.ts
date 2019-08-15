import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateProjectInput: _Structure_ = {
  type: "structure",
  required: ["id"],
  members: {
    id: {
      shape: {
        type: "string",
        min: 2
      }
    },
    name: {
      shape: {
        type: "string",
        sensitive: true,
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
