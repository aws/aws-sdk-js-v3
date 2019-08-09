import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ErrorDetail: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    DetailedErrorCode: {
      shape: {
        type: "string"
      }
    },
    DetailedErrorMessage: {
      shape: {
        type: "string"
      }
    }
  }
};
