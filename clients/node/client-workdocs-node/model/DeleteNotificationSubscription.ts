import { DeleteNotificationSubscriptionInput } from "./DeleteNotificationSubscriptionInput";
import { DeleteNotificationSubscriptionOutput } from "./DeleteNotificationSubscriptionOutput";
import { UnauthorizedResourceAccessException } from "./UnauthorizedResourceAccessException";
import { EntityNotExistsException } from "./EntityNotExistsException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { ProhibitedStateException } from "./ProhibitedStateException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
