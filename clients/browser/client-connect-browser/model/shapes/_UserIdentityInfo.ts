import { Structure as _Structure_ } from "@aws-sdk/types";

export const _UserIdentityInfo: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    FirstName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    LastName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Email: {
      shape: {
        type: "string"
      }
    }
  }
};
