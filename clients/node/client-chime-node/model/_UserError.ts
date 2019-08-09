import { Structure as _Structure_ } from "@aws-sdk/types";

export const _UserError: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    UserId: {
      shape: {
        type: "string"
      }
    },
    ErrorCode: {
      shape: {
        type: "string"
      }
    },
    ErrorMessage: {
      shape: {
        type: "string"
      }
    }
  }
};
