import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetSubscriptionDefinitionInput: _Structure_ = {
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
