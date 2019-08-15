import { Structure as _Structure_ } from "@aws-sdk/types";

export const _FailedItemDetails: _Structure_ = {
  type: "structure",
  required: ["failureCode", "retryable"],
  members: {
    failureCode: {
      shape: {
        type: "string"
      }
    },
    retryable: {
      shape: {
        type: "boolean"
      }
    }
  }
};
