import { Structure as _Structure_ } from "@aws-sdk/types";

export const _UpdateUserRequestItem: _Structure_ = {
  type: "structure",
  required: ["UserId"],
  members: {
    UserId: {
      shape: {
        type: "string"
      }
    },
    LicenseType: {
      shape: {
        type: "string"
      }
    }
  }
};
