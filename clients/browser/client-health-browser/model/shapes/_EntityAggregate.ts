import { Structure as _Structure_ } from "@aws-sdk/types";

export const _EntityAggregate: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    eventArn: {
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
