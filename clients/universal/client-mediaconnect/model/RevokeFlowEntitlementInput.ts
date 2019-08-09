import { Structure as _Structure_ } from "@aws-sdk/types";

export const RevokeFlowEntitlementInput: _Structure_ = {
  type: "structure",
  required: ["FlowArn", "EntitlementArn"],
  members: {
    EntitlementArn: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "entitlementArn"
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
