import { ModifyEventSubscriptionInput } from "./ModifyEventSubscriptionInput";
import { ModifyEventSubscriptionOutput } from "./ModifyEventSubscriptionOutput";
import { ResourceQuotaExceededFault } from "./ResourceQuotaExceededFault";
import { ResourceNotFoundFault } from "./ResourceNotFoundFault";
import { SNSInvalidTopicFault } from "./SNSInvalidTopicFault";
import { SNSNoAuthorizationFault } from "./SNSNoAuthorizationFault";
import { KMSAccessDeniedFault } from "./KMSAccessDeniedFault";
import { KMSDisabledFault } from "./KMSDisabledFault";
import { KMSInvalidStateFault } from "./KMSInvalidStateFault";
import { KMSNotFoundFault } from "./KMSNotFoundFault";
import { KMSThrottlingFault } from "./KMSThrottlingFault";
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
