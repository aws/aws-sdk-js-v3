import { GetEventsConfigurationInput } from "../shapes/GetEventsConfigurationInput";
import { GetEventsConfigurationOutput } from "../shapes/GetEventsConfigurationOutput";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { ServiceFailureException } from "../shapes/ServiceFailureException";
import { ForbiddenException } from "../shapes/ForbiddenException";
import { BadRequestException } from "../shapes/BadRequestException";
import { UnauthorizedClientException } from "../shapes/UnauthorizedClientException";
import { ResourceLimitExceededException } from "../shapes/ResourceLimitExceededException";
import { NotFoundException } from "../shapes/NotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetEventsConfiguration: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetEventsConfiguration",
  http: {
    method: "GET",
    requestUri: "/accounts/{accountId}/bots/{botId}/events-configuration"
  },
  input: {
    shape: GetEventsConfigurationInput
  },
  output: {
    shape: GetEventsConfigurationOutput
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
