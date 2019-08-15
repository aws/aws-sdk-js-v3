import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateActionTargetInput: _Structure_ = {
  type: "structure",
  required: ["Name", "Description", "Id"],
  members: {
    Name: {
      shape: {
        type: "string"
      }
    },
    Description: {
      shape: {
        type: "string"
      }
    },
    Id: {
      shape: {
        type: "string"
      }
    }
  }
};
