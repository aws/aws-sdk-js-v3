import { Structure as _Structure_ } from "@aws-sdk/types";

export const _QuotaSettings: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    limit: {
      shape: {
        type: "integer"
      }
    },
    offset: {
      shape: {
        type: "integer"
      }
    },
    period: {
      shape: {
        type: "string"
      }
    }
  }
};
