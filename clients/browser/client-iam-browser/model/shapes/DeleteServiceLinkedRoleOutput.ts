import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteServiceLinkedRoleOutput: _Structure_ = {
  type: "structure",
  required: ["DeletionTaskId"],
  members: {
    DeletionTaskId: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
