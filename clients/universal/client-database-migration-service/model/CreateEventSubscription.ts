import { CreateEventSubscriptionInput } from "./CreateEventSubscriptionInput";
import { CreateEventSubscriptionOutput } from "./CreateEventSubscriptionOutput";
import { ResourceQuotaExceededFault } from "./ResourceQuotaExceededFault";
import { ResourceNotFoundFault } from "./ResourceNotFoundFault";
import { ResourceAlreadyExistsFault } from "./ResourceAlreadyExistsFault";
import { SNSInvalidTopicFault } from "./SNSInvalidTopicFault";
import { SNSNoAuthorizationFault } from "./SNSNoAuthorizationFault";
import { KMSAccessDeniedFault } from "./KMSAccessDeniedFault";
import { KMSDisabledFault } from "./KMSDisabledFault";
import { KMSInvalidStateFault } from "./KMSInvalidStateFault";
import { KMSNotFoundFault } from "./KMSNotFoundFault";
import { KMSThrottlingFault } from "./KMSThrottlingFault";
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
    shape: CreateEventSubscriptionOutput
  },
  errors: [
    {
      shape: ResourceQuotaExceededFault
    },
    {
      shape: ResourceNotFoundFault
    },
    {
      shape: ResourceAlreadyExistsFault
    },
    {
      shape: SNSInvalidTopicFault
    },
    {
      shape: SNSNoAuthorizationFault
    },
    {
      shape: KMSAccessDeniedFault
    },
    {
      shape: KMSDisabledFault
    },
    {
      shape: KMSInvalidStateFault
    },
    {
      shape: KMSNotFoundFault
    },
    {
      shape: KMSThrottlingFault
    }
  ]
};
