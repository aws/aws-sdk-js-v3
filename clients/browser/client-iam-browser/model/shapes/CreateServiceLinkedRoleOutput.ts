import { _Role } from "./_Role";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateServiceLinkedRoleOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Role: {
      shape: _Role
    }
  }
};
