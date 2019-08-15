import { Structure as _Structure_ } from "@aws-sdk/types";

export const RefreshTrustedAdvisorCheckInput: _Structure_ = {
  type: "structure",
  required: ["checkId"],
  members: {
    checkId: {
      shape: {
        type: "string"
      }
    }
  }
};
