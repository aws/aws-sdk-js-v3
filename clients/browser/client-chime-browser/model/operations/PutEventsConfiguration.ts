import { PutEventsConfigurationInput } from "../shapes/PutEventsConfigurationInput";
import { PutEventsConfigurationOutput } from "../shapes/PutEventsConfigurationOutput";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { ServiceFailureException } from "../shapes/ServiceFailureException";
import { ForbiddenException } from "../shapes/ForbiddenException";
import { BadRequestException } from "../shapes/BadRequestException";
import { UnauthorizedClientException } from "../shapes/UnauthorizedClientException";
import { ResourceLimitExceededException } from "../shapes/ResourceLimitExceededException";
import { NotFoundException } from "../shapes/NotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const PutEventsConfiguration: _Operation_ = {
  metadata: ServiceMetadata,
  name: "PutEventsConfiguration",
  http: {
    method: "PUT",
    requestUri: "/accounts/{accountId}/bots/{botId}/events-configuration"
  },
  input: {
    shape: PutEventsConfigurationInput
  },
  output: {
    shape: PutEventsConfigurationOutput
  },
  errors: [
    {
      shape: ServiceUnavailableException
    },
    {
      shape: ServiceFailureException
    },
    {
      shape: ForbiddenException
    },
    {
      shape: BadRequestException
    },
    {
      shape: UnauthorizedClientException
    },
    {
      shape: ResourceLimitExceededException
    },
    {
      shape: NotFoundException
    }
  ]
};
