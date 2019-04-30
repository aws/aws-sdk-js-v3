import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateRepositoryNameInput: _Structure_ = {
  type: "structure",
  required: ["oldName", "newName"],
  members: {
    oldName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    newName: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
