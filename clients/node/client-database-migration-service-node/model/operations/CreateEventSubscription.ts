import { CreateEventSubscriptionInput } from "../shapes/CreateEventSubscriptionInput";
import { CreateEventSubscriptionOutput } from "../shapes/CreateEventSubscriptionOutput";
import { ResourceQuotaExceededFault } from "../shapes/ResourceQuotaExceededFault";
import { ResourceNotFoundFault } from "../shapes/ResourceNotFoundFault";
import { ResourceAlreadyExistsFault } from "../shapes/ResourceAlreadyExistsFault";
import { SNSInvalidTopicFault } from "../shapes/SNSInvalidTopicFault";
import { SNSNoAuthorizationFault } from "../shapes/SNSNoAuthorizationFault";
import { KMSAccessDeniedFault } from "../shapes/KMSAccessDeniedFault";
import { KMSDisabledFault } from "../shapes/KMSDisabledFault";
import { KMSInvalidStateFault } from "../shapes/KMSInvalidStateFault";
import { KMSNotFoundFault } from "../shapes/KMSNotFoundFault";
import { KMSThrottlingFault } from "../shapes/KMSThrottlingFault";
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
