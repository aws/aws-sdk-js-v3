import { DeleteNotificationSubscriptionInput } from "../shapes/DeleteNotificationSubscriptionInput";
import { DeleteNotificationSubscriptionOutput } from "../shapes/DeleteNotificationSubscriptionOutput";
import { UnauthorizedResourceAccessException } from "../shapes/UnauthorizedResourceAccessException";
import { EntityNotExistsException } from "../shapes/EntityNotExistsException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { ProhibitedStateException } from "../shapes/ProhibitedStateException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteNotificationSubscription: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteNotificationSubscription",
  http: {
    method: "DELETE",
    requestUri:
      "/api/v1/organizations/{OrganizationId}/subscriptions/{SubscriptionId}"
  },
  input: {
    shape: DeleteNotificationSubscriptionInput
  },
  output: {
    shape: DeleteNotificationSubscriptionOutput
  },
  errors: [
    {
      shape: UnauthorizedResourceAccessException
    },
    {
      shape: EntityNotExistsException
    },
    {
      shape: ServiceUnavailableException
    },
    {
      shape: ProhibitedStateException
    }
  ]
};
