import { GetEventsConfigurationInput } from "./GetEventsConfigurationInput";
import { GetEventsConfigurationOutput } from "./GetEventsConfigurationOutput";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { ServiceFailureException } from "./ServiceFailureException";
import { ForbiddenException } from "./ForbiddenException";
import { BadRequestException } from "./BadRequestException";
import { UnauthorizedClientException } from "./UnauthorizedClientException";
import { ResourceLimitExceededException } from "./ResourceLimitExceededException";
import { NotFoundException } from "./NotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
