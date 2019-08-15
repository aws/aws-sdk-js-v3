import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ErrorInfo: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ErrorCode: {
      shape: {
        type: "string"
      },
      locationName: "errorCode"
    },
    ErrorString: {
      shape: {
        type: "string"
      },
      locationName: "errorString"
    }
  }
};
