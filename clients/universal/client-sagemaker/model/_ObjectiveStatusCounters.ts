import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ObjectiveStatusCounters: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Succeeded: {
      shape: {
        type: "integer"
      }
    },
    Pending: {
      shape: {
        type: "integer"
      }
    },
    Failed: {
      shape: {
        type: "integer"
      }
    }
  }
};
