import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetAdminAccountOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    AdminAccount: {
      shape: {
        type: "string",
        min: 1
      }
    },
    RoleStatus: {
      shape: {
        type: "string"
      }
    }
  }
};
