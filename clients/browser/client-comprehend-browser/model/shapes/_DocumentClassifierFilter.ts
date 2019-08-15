import { Structure as _Structure_ } from "@aws-sdk/types";

export const _DocumentClassifierFilter: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Status: {
      shape: {
        type: "string"
      }
    },
    SubmitTimeBefore: {
      shape: {
        type: "timestamp"
      }
    },
    SubmitTimeAfter: {
      shape: {
        type: "timestamp"
      }
    }
  }
};
