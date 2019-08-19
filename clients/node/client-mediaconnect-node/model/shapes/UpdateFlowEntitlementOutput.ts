import { _Entitlement } from "./_Entitlement";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateFlowEntitlementOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Entitlement: {
      shape: _Entitlement,
      locationName: "entitlement"
    },
    FlowArn: {
      shape: {
        type: "string"
      },
      locationName: "flowArn"
    }
  }
};
