import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetOperationsForResourceInput: _Structure_ = {
  type: "structure",
  required: ["resourceName"],
  members: {
    resourceName: {
      shape: {
        type: "string"
      }
    },
    pageToken: {
      shape: {
        type: "string"
      }
    }
  }
};
