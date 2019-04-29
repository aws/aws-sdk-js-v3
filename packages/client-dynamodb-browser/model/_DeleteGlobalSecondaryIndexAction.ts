import { Structure as _Structure_ } from "@aws-sdk/types";

export const _DeleteGlobalSecondaryIndexAction: _Structure_ = {
  type: "structure",
  required: ["IndexName"],
  members: {
    IndexName: {
      shape: {
        type: "string",
        min: 3
      }
    }
  }
};
