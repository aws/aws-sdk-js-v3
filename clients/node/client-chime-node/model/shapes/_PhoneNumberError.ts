import { Structure as _Structure_ } from "@aws-sdk/types";

export const _PhoneNumberError: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    PhoneNumberId: {
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
