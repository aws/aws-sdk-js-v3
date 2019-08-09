import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Timing: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    SubmitTimeMillis: {
      shape: {
        type: "integer"
      }
    },
    StartTimeMillis: {
      shape: {
        type: "integer"
      }
    },
    FinishTimeMillis: {
      shape: {
        type: "integer"
      }
    }
  }
};
