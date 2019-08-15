import { _CidrAuthorizationContext } from "./_CidrAuthorizationContext";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ProvisionByoipCidrInput: _Structure_ = {
  type: "structure",
  required: ["Cidr"],
  members: {
    Cidr: {
      shape: {
        type: "string"
      }
    },
    CidrAuthorizationContext: {
      shape: _CidrAuthorizationContext
    },
    Description: {
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
