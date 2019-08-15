import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateTrustOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    RequestId: {
      shape: {
        type: "string"
      }
    },
    TrustId: {
      shape: {
        type: "string"
      }
    }
  }
};
