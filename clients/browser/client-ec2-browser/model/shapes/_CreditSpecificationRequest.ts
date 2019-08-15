import { Structure as _Structure_ } from "@aws-sdk/types";

export const _CreditSpecificationRequest: _Structure_ = {
  type: "structure",
  required: ["CpuCredits"],
  members: {
    CpuCredits: {
      shape: {
        type: "string"
      }
    }
  }
};
