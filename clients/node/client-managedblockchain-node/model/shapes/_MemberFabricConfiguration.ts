import { Structure as _Structure_ } from "@aws-sdk/types";

export const _MemberFabricConfiguration: _Structure_ = {
  type: "structure",
  required: ["AdminUsername", "AdminPassword"],
  members: {
    AdminUsername: {
      shape: {
        type: "string",
        min: 1
      }
    },
    AdminPassword: {
      shape: {
        type: "string",
        sensitive: true,
        min: 8
      }
    }
  }
};
