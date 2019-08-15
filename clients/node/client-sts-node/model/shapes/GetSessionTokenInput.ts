import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetSessionTokenInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    DurationSeconds: {
      shape: {
        type: "integer",
        min: 900
      }
    },
    SerialNumber: {
      shape: {
        type: "string",
        min: 9
      }
    },
    TokenCode: {
      shape: {
        type: "string",
        min: 6
      }
    }
  }
};
