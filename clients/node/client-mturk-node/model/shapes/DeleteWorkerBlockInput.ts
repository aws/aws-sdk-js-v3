import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteWorkerBlockInput: _Structure_ = {
  type: "structure",
  required: ["WorkerId"],
  members: {
    WorkerId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Reason: {
      shape: {
        type: "string"
      }
    }
  }
};
