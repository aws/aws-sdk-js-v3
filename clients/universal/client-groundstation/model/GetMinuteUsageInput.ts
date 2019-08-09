import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetMinuteUsageInput: _Structure_ = {
  type: "structure",
  required: ["month", "year"],
  members: {
    month: {
      shape: {
        type: "integer"
      }
    },
    year: {
      shape: {
        type: "integer"
      }
    }
  }
};
