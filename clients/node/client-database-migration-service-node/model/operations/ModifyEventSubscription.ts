import { ModifyEventSubscriptionInput } from "../shapes/ModifyEventSubscriptionInput";
import { ModifyEventSubscriptionOutput } from "../shapes/ModifyEventSubscriptionOutput";
import { ResourceQuotaExceededFault } from "../shapes/ResourceQuotaExceededFault";
import { ResourceNotFoundFault } from "../shapes/ResourceNotFoundFault";
import { SNSInvalidTopicFault } from "../shapes/SNSInvalidTopicFault";
import { SNSNoAuthorizationFault } from "../shapes/SNSNoAuthorizationFault";
import { KMSAccessDeniedFault } from "../shapes/KMSAccessDeniedFault";
import { KMSDisabledFault } from "../shapes/KMSDisabledFault";
import { KMSInvalidStateFault } from "../shapes/KMSInvalidStateFault";
import { KMSNotFoundFault } from "../shapes/KMSNotFoundFault";
import { KMSThrottlingFault } from "../shapes/KMSThrottlingFault";
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
    shape: ModifyEventSubscriptionOutput
  },
  errors: [
    {
      shape: ResourceQuotaExceededFault
    },
    {
      shape: ResourceNotFoundFault
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
