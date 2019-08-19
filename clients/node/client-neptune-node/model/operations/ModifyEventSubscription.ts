import { ModifyEventSubscriptionInput } from "../shapes/ModifyEventSubscriptionInput";
import { ModifyEventSubscriptionOutput } from "../shapes/ModifyEventSubscriptionOutput";
import { EventSubscriptionQuotaExceededFault } from "../shapes/EventSubscriptionQuotaExceededFault";
import { SubscriptionNotFoundFault } from "../shapes/SubscriptionNotFoundFault";
import { SNSInvalidTopicFault } from "../shapes/SNSInvalidTopicFault";
import { SNSNoAuthorizationFault } from "../shapes/SNSNoAuthorizationFault";
import { SNSTopicArnNotFoundFault } from "../shapes/SNSTopicArnNotFoundFault";
import { SubscriptionCategoryNotFoundFault } from "../shapes/SubscriptionCategoryNotFoundFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ModifyEventSubscription: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ModifyEventSubscription",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ModifyEventSubscriptionInput
  },
  output: {
    shape: ModifyEventSubscriptionOutput,
    resultWrapper: "ModifyEventSubscriptionResult"
  },
  errors: [
    {
      shape: EventSubscriptionQuotaExceededFault
    },
    {
      shape: SubscriptionNotFoundFault
    },
    {
      shape: SNSInvalidTopicFault
    },
    {
      shape: SNSNoAuthorizationFault
    },
    {
      shape: SNSTopicArnNotFoundFault
    },
    {
      shape: SubscriptionCategoryNotFoundFault
    }
  ]
};
