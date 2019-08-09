import { CreateEventSubscriptionInput } from "./CreateEventSubscriptionInput";
import { CreateEventSubscriptionOutput } from "./CreateEventSubscriptionOutput";
import { EventSubscriptionQuotaExceededFault } from "./EventSubscriptionQuotaExceededFault";
import { SubscriptionAlreadyExistFault } from "./SubscriptionAlreadyExistFault";
import { SNSInvalidTopicFault } from "./SNSInvalidTopicFault";
import { SNSNoAuthorizationFault } from "./SNSNoAuthorizationFault";
import { SNSTopicArnNotFoundFault } from "./SNSTopicArnNotFoundFault";
import { SubscriptionEventIdNotFoundFault } from "./SubscriptionEventIdNotFoundFault";
import { SubscriptionCategoryNotFoundFault } from "./SubscriptionCategoryNotFoundFault";
import { SubscriptionSeverityNotFoundFault } from "./SubscriptionSeverityNotFoundFault";
import { SourceNotFoundFault } from "./SourceNotFoundFault";
import { TagLimitExceededFault } from "./TagLimitExceededFault";
import { InvalidTagFault } from "./InvalidTagFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
