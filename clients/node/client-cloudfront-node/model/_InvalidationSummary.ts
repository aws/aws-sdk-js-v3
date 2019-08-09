import { Structure as _Structure_ } from "@aws-sdk/types";

export const _InvalidationSummary: _Structure_ = {
  type: "structure",
  required: ["Id", "CreateTime", "Status"],
  members: {
    Id: {
      shape: {
        type: "string"
      }
    },
    CreateTime: {
      shape: {
        type: "timestamp"
      }
    },
    Status: {
      shape: {
        type: "string"
      }
    }
  }
};
