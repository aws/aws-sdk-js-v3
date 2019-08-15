import { _InvalidationBatch } from "./_InvalidationBatch";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Invalidation: _Structure_ = {
  type: "structure",
  required: ["Id", "Status", "CreateTime", "InvalidationBatch"],
  members: {
    Id: {
      shape: {
        type: "string"
      }
    },
    Status: {
      shape: {
        type: "string"
      }
    },
    CreateTime: {
      shape: {
        type: "timestamp"
      }
    },
    InvalidationBatch: {
      shape: _InvalidationBatch
    }
  }
};
