import { Structure as _Structure_ } from "@aws-sdk/types";

export const _AccessKeyLastUsed: _Structure_ = {
  type: "structure",
  required: ["LastUsedDate", "ServiceName", "Region"],
  members: {
    LastUsedDate: {
      shape: {
        type: "timestamp"
      }
    },
    ServiceName: {
      shape: {
        type: "string"
      }
    },
    Region: {
      shape: {
        type: "string"
      }
    }
  }
};
