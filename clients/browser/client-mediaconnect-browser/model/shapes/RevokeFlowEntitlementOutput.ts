import { Structure as _Structure_ } from "@aws-sdk/types";

export const RevokeFlowEntitlementOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    EntitlementArn: {
      shape: {
        type: "string"
      },
      locationName: "entitlementArn"
    },
    FlowArn: {
      shape: {
        type: "string"
      },
      locationName: "flowArn"
    }
  }
};
