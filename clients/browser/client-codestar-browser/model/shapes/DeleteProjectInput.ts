import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteProjectInput: _Structure_ = {
  type: "structure",
  required: ["id"],
  members: {
    id: {
      shape: {
        type: "string",
        min: 2
      }
    },
    clientRequestToken: {
      shape: {
        type: "string",
        min: 1
      }
    },
    deleteStack: {
      shape: {
        type: "boolean"
      }
    }
  }
};
