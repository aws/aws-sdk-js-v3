import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateProjectInput: _Structure_ = {
  type: "structure",
  required: ["name"],
  members: {
    name: {
      shape: {
        type: "string"
      }
    },
    defaultJobTimeoutMinutes: {
      shape: {
        type: "integer"
      }
    }
  }
};
