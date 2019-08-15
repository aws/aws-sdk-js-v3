import { Structure as _Structure_ } from "@aws-sdk/types";

export const _OptionGroupMembership: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    OptionGroupName: {
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
