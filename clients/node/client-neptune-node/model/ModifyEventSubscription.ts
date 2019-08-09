import { ModifyEventSubscriptionInput } from "./ModifyEventSubscriptionInput";
import { ModifyEventSubscriptionOutput } from "./ModifyEventSubscriptionOutput";
import { EventSubscriptionQuotaExceededFault } from "./EventSubscriptionQuotaExceededFault";
import { SubscriptionNotFoundFault } from "./SubscriptionNotFoundFault";
import { SNSInvalidTopicFault } from "./SNSInvalidTopicFault";
import { SNSNoAuthorizationFault } from "./SNSNoAuthorizationFault";
import { SNSTopicArnNotFoundFault } from "./SNSTopicArnNotFoundFault";
import { SubscriptionCategoryNotFoundFault } from "./SubscriptionCategoryNotFoundFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
