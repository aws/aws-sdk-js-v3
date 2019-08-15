import { Structure as _Structure_ } from "@aws-sdk/types";

export const _GroupOwnerSetting: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    AutoAddGroupOwner: {
      shape: {
        type: "boolean"
      }
    },
    GroupOwner: {
      shape: {
        type: "string"
      }
    }
  }
};
