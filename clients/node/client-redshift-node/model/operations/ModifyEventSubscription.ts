import { ModifyEventSubscriptionInput } from "../shapes/ModifyEventSubscriptionInput";
import { ModifyEventSubscriptionOutput } from "../shapes/ModifyEventSubscriptionOutput";
import { SubscriptionNotFoundFault } from "../shapes/SubscriptionNotFoundFault";
import { SNSInvalidTopicFault } from "../shapes/SNSInvalidTopicFault";
import { SNSNoAuthorizationFault } from "../shapes/SNSNoAuthorizationFault";
import { SNSTopicArnNotFoundFault } from "../shapes/SNSTopicArnNotFoundFault";
import { SubscriptionEventIdNotFoundFault } from "../shapes/SubscriptionEventIdNotFoundFault";
import { SubscriptionCategoryNotFoundFault } from "../shapes/SubscriptionCategoryNotFoundFault";
import { SubscriptionSeverityNotFoundFault } from "../shapes/SubscriptionSeverityNotFoundFault";
import { SourceNotFoundFault } from "../shapes/SourceNotFoundFault";
import { InvalidSubscriptionStateFault } from "../shapes/InvalidSubscriptionStateFault";
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
      shape: SubscriptionEventIdNotFoundFault
    },
    {
      shape: SubscriptionCategoryNotFoundFault
    },
    {
      shape: SubscriptionSeverityNotFoundFault
    },
    {
      shape: SourceNotFoundFault
    },
    {
      shape: InvalidSubscriptionStateFault
    }
  ]
};
