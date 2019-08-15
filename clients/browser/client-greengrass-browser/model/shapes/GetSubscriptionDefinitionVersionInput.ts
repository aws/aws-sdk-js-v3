import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetSubscriptionDefinitionVersionInput: _Structure_ = {
  type: "structure",
  required: ["SubscriptionDefinitionId", "SubscriptionDefinitionVersionId"],
  members: {
    NextToken: {
      shape: {
        type: "string"
      },
      location: "querystring",
      locationName: "NextToken"
    },
    SubscriptionDefinitionId: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "SubscriptionDefinitionId"
    },
    SubscriptionDefinitionVersionId: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "SubscriptionDefinitionVersionId"
    }
  }
};
