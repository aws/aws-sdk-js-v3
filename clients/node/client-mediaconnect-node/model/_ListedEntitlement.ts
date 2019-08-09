import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ListedEntitlement: _Structure_ = {
  type: "structure",
  required: ["EntitlementArn", "EntitlementName"],
  members: {
    EntitlementArn: {
      shape: {
        type: "string"
      },
      locationName: "entitlementArn"
    },
    EntitlementName: {
      shape: {
        type: "string"
      },
      locationName: "entitlementName"
    }
  }
};
