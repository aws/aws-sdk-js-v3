import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetComplianceDetailInput: _Structure_ = {
  type: "structure",
  required: ["PolicyId", "MemberAccount"],
  members: {
    PolicyId: {
      shape: {
        type: "string",
        min: 36
      }
    },
    MemberAccount: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
