import { Structure as _Structure_ } from "@aws-sdk/types";

export const _RateIncreaseCriteria: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    numberOfNotifiedThings: {
      shape: {
        type: "integer",
        min: 1
      }
    },
    numberOfSucceededThings: {
      shape: {
        type: "integer",
        min: 1
      }
    }
  }
};
