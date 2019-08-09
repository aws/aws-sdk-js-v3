import { ___listOfGrantEntitlementRequest } from "./___listOfGrantEntitlementRequest";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GrantFlowEntitlementsInput: _Structure_ = {
  type: "structure",
  required: ["FlowArn", "Entitlements"],
  members: {
    Entitlements: {
      shape: ___listOfGrantEntitlementRequest,
      locationName: "entitlements"
    },
    FlowArn: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "flowArn"
    }
  }
};
