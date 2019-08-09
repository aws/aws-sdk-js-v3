import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateSubscriptionDefinitionInput: _Structure_ = {
  type: "structure",
  required: ["SubscriptionDefinitionId"],
  members: {
    Name: {
      shape: {
        type: "string"
      }
    },
    SubscriptionDefinitionId: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "SubscriptionDefinitionId"
    }
  }
};
