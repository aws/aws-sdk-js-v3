import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListSubscriptionDefinitionVersionsInput: _Structure_ = {
  type: "structure",
  required: ["SubscriptionDefinitionId"],
  members: {
    MaxResults: {
      shape: {
        type: "string"
      },
      location: "querystring",
      locationName: "MaxResults"
    },
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
    }
  }
};
