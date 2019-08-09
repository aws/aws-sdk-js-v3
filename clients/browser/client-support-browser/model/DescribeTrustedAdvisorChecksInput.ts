import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeTrustedAdvisorChecksInput: _Structure_ = {
  type: "structure",
  required: ["language"],
  members: {
    language: {
      shape: {
        type: "string"
      }
    }
  }
};
