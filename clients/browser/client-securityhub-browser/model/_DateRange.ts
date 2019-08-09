import { Structure as _Structure_ } from "@aws-sdk/types";

export const _DateRange: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Value: {
      shape: {
        type: "integer"
      }
    },
    Unit: {
      shape: {
        type: "string"
      }
    }
  }
};
