import { Structure as _Structure_ } from "@aws-sdk/types";

export const _SecurityGroupMembership: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    SecurityGroupIdentifier: {
      shape: {
        type: "string"
      }
    },
    Status: {
      shape: {
        type: "string"
      }
    }
  }
};
