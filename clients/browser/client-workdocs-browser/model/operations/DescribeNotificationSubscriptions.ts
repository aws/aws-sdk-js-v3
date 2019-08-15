import { DescribeNotificationSubscriptionsInput } from "../shapes/DescribeNotificationSubscriptionsInput";
import { DescribeNotificationSubscriptionsOutput } from "../shapes/DescribeNotificationSubscriptionsOutput";
import { UnauthorizedResourceAccessException } from "../shapes/UnauthorizedResourceAccessException";
import { EntityNotExistsException } from "../shapes/EntityNotExistsException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
