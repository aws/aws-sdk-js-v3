import { _Role } from "./_Role";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateRoleOutput: _Structure_ = {
  type: "structure",
  required: ["Role"],
  members: {
    Role: {
      shape: _Role
    }
  }
};
