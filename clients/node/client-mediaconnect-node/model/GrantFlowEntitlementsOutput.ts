import { ___listOfEntitlement } from "./___listOfEntitlement";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GrantFlowEntitlementsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Entitlements: {
      shape: ___listOfEntitlement,
      locationName: "entitlements"
    },
    FlowArn: {
      shape: {
        type: "string"
      },
      locationName: "flowArn"
    }
  }
};
