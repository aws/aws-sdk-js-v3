import { Structure as _Structure_ } from "@aws-sdk/types";

export const _JobFailure: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    FailureCode: {
      shape: {
        type: "string",
        min: 1
      }
    },
    FailureReason: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
