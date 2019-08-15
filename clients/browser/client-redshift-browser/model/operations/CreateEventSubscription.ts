import { CreateEventSubscriptionInput } from "../shapes/CreateEventSubscriptionInput";
import { CreateEventSubscriptionOutput } from "../shapes/CreateEventSubscriptionOutput";
import { EventSubscriptionQuotaExceededFault } from "../shapes/EventSubscriptionQuotaExceededFault";
import { SubscriptionAlreadyExistFault } from "../shapes/SubscriptionAlreadyExistFault";
import { SNSInvalidTopicFault } from "../shapes/SNSInvalidTopicFault";
import { SNSNoAuthorizationFault } from "../shapes/SNSNoAuthorizationFault";
import { SNSTopicArnNotFoundFault } from "../shapes/SNSTopicArnNotFoundFault";
import { SubscriptionEventIdNotFoundFault } from "../shapes/SubscriptionEventIdNotFoundFault";
import { SubscriptionCategoryNotFoundFault } from "../shapes/SubscriptionCategoryNotFoundFault";
import { SubscriptionSeverityNotFoundFault } from "../shapes/SubscriptionSeverityNotFoundFault";
import { SourceNotFoundFault } from "../shapes/SourceNotFoundFault";
import { TagLimitExceededFault } from "../shapes/TagLimitExceededFault";
import { InvalidTagFault } from "../shapes/InvalidTagFault";
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
      shape: TagLimitExceededFault
    },
    {
      shape: InvalidTagFault
    }
  ]
};
