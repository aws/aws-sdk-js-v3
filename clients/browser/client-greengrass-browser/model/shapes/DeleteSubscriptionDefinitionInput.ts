import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteSubscriptionDefinitionInput: _Structure_ = {
  type: "structure",
  required: ["SubscriptionDefinitionId"],
  members: {
    SubscriptionDefinitionId: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "SubscriptionDefinitionId"
    }
  }
};
