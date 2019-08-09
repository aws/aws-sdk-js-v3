import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ImportFindingsError: _Structure_ = {
  type: "structure",
  required: ["Id", "ErrorCode", "ErrorMessage"],
  members: {
    Id: {
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
