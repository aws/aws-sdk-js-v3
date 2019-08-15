import { CreateEventSubscriptionInput } from "../shapes/CreateEventSubscriptionInput";
import { CreateEventSubscriptionOutput } from "../shapes/CreateEventSubscriptionOutput";
import { EventSubscriptionQuotaExceededFault } from "../shapes/EventSubscriptionQuotaExceededFault";
import { SubscriptionAlreadyExistFault } from "../shapes/SubscriptionAlreadyExistFault";
import { SNSInvalidTopicFault } from "../shapes/SNSInvalidTopicFault";
import { SNSNoAuthorizationFault } from "../shapes/SNSNoAuthorizationFault";
import { SNSTopicArnNotFoundFault } from "../shapes/SNSTopicArnNotFoundFault";
import { SubscriptionCategoryNotFoundFault } from "../shapes/SubscriptionCategoryNotFoundFault";
import { SourceNotFoundFault } from "../shapes/SourceNotFoundFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateEventSubscription: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateEventSubscription",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateEventSubscriptionInput
  },
  output: {
    shape: CreateEventSubscriptionOutput,
    resultWrapper: "CreateEventSubscriptionResult"
  },
  errors: [
    {
      shape: EventSubscriptionQuotaExceededFault
    },
    {
      shape: SubscriptionAlreadyExistFault
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
    },
    {
      shape: SourceNotFoundFault
    }
  ]
};
