import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateExpirationForHITInput: _Structure_ = {
  type: "structure",
  required: ["HITId", "ExpireAt"],
  members: {
    HITId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    ExpireAt: {
      shape: {
        type: "timestamp"
      }
    }
  }
};
