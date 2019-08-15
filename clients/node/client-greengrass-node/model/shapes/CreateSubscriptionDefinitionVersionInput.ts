import { ___listOfSubscription } from "./___listOfSubscription";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateSubscriptionDefinitionVersionInput: _Structure_ = {
  type: "structure",
  required: ["SubscriptionDefinitionId"],
  members: {
    AmznClientToken: {
      shape: {
        type: "string"
      },
      location: "header",
      locationName: "X-Amzn-Client-Token"
    },
    SubscriptionDefinitionId: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "SubscriptionDefinitionId"
    },
    Subscriptions: {
      shape: ___listOfSubscription
    }
  }
};
