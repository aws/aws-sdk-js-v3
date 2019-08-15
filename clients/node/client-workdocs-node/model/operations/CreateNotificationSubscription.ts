import { CreateNotificationSubscriptionInput } from "../shapes/CreateNotificationSubscriptionInput";
import { CreateNotificationSubscriptionOutput } from "../shapes/CreateNotificationSubscriptionOutput";
import { UnauthorizedResourceAccessException } from "../shapes/UnauthorizedResourceAccessException";
import { TooManySubscriptionsException } from "../shapes/TooManySubscriptionsException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateNotificationSubscription: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateNotificationSubscription",
  http: {
    method: "POST",
    requestUri: "/api/v1/organizations/{OrganizationId}/subscriptions"
  },
  input: {
    shape: CreateNotificationSubscriptionInput
  },
  output: {
    shape: CreateNotificationSubscriptionOutput
  },
  errors: [
    {
      shape: UnauthorizedResourceAccessException
    },
    {
      shape: TooManySubscriptionsException
    },
    {
      shape: ServiceUnavailableException
    }
  ]
};
