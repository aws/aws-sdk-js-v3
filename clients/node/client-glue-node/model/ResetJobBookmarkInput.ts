import { Structure as _Structure_ } from "@aws-sdk/types";

export const ResetJobBookmarkInput: _Structure_ = {
  type: "structure",
  required: ["JobName"],
  members: {
    JobName: {
      shape: {
        type: "string"
      }
    },
    RunId: {
      shape: {
        type: "string"
      }
    }
  }
};
