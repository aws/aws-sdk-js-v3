import { Structure as _Structure_ } from "@aws-sdk/types";

export const VerifyTrustInput: _Structure_ = {
  type: "structure",
  required: ["TrustId"],
  members: {
    TrustId: {
      shape: {
        type: "string"
      }
    }
  }
};
