import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Diagnostics: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    errorCode: {
      shape: {
        type: "string"
      }
    },
    scriptName: {
      shape: {
        type: "string"
      }
    },
    message: {
      shape: {
        type: "string"
      }
    },
    logTail: {
      shape: {
        type: "string"
      }
    }
  }
};
