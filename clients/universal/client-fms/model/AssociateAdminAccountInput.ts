import { Structure as _Structure_ } from "@aws-sdk/types";

export const AssociateAdminAccountInput: _Structure_ = {
  type: "structure",
  required: ["AdminAccount"],
  members: {
    AdminAccount: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
