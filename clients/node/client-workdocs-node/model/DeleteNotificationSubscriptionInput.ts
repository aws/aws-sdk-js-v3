import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteNotificationSubscriptionInput: _Structure_ = {
  type: "structure",
  required: ["SubscriptionId", "OrganizationId"],
  members: {
    SubscriptionId: {
      shape: {
        type: "string",
        min: 1
      },
      location: "uri",
      locationName: "SubscriptionId"
    },
    OrganizationId: {
      shape: {
        type: "string",
        min: 1
      },
      location: "uri",
      locationName: "OrganizationId"
    }
  }
};
