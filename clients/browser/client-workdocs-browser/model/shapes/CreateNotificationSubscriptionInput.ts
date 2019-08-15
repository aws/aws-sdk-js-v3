import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateNotificationSubscriptionInput: _Structure_ = {
  type: "structure",
  required: ["OrganizationId", "Endpoint", "Protocol", "SubscriptionType"],
  members: {
    OrganizationId: {
      shape: {
        type: "string",
        min: 1
      },
      location: "uri",
      locationName: "OrganizationId"
    },
    Endpoint: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Protocol: {
      shape: {
        type: "string"
      }
    },
    SubscriptionType: {
      shape: {
        type: "string"
      }
    }
  }
};
