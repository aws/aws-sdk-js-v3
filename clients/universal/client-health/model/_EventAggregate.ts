import { Structure as _Structure_ } from "@aws-sdk/types";

export const _EventAggregate: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    aggregateValue: {
      shape: {
        type: "string"
      }
    },
    count: {
      shape: {
        type: "integer"
      }
    }
  }
};
