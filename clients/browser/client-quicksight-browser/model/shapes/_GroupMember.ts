import { Structure as _Structure_ } from "@aws-sdk/types";

export const _GroupMember: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Arn: {
      shape: {
        type: "string"
      }
    },
    MemberName: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
