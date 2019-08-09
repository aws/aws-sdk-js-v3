import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateTrustInput: _Structure_ = {
  type: "structure",
  required: ["TrustId"],
  members: {
    TrustId: {
      shape: {
        type: "string"
      }
    },
    SelectiveAuth: {
      shape: {
        type: "string"
      }
    }
  }
};
