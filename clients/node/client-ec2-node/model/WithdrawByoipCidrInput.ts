import { Structure as _Structure_ } from "@aws-sdk/types";

export const WithdrawByoipCidrInput: _Structure_ = {
  type: "structure",
  required: ["Cidr"],
  members: {
    Cidr: {
      shape: {
        type: "string"
      }
    },
    DryRun: {
      shape: {
        type: "boolean"
      }
    }
  }
};
