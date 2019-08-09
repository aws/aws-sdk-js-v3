import { DescribeNotificationSubscriptionsInput } from "./DescribeNotificationSubscriptionsInput";
import { DescribeNotificationSubscriptionsOutput } from "./DescribeNotificationSubscriptionsOutput";
import { UnauthorizedResourceAccessException } from "./UnauthorizedResourceAccessException";
import { EntityNotExistsException } from "./EntityNotExistsException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DescribeNotificationSubscriptions: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeNotificationSubscriptions",
  http: {
    method: "GET",
    requestUri: "/api/v1/organizations/{OrganizationId}/subscriptions"
  },
  input: {
    shape: DescribeNotificationSubscriptionsInput
  },
  output: {
    shape: DescribeNotificationSubscriptionsOutput
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
    }
  ]
};
