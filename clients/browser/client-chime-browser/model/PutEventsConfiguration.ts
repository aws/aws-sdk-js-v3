import { PutEventsConfigurationInput } from "./PutEventsConfigurationInput";
import { PutEventsConfigurationOutput } from "./PutEventsConfigurationOutput";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { ServiceFailureException } from "./ServiceFailureException";
import { ForbiddenException } from "./ForbiddenException";
import { BadRequestException } from "./BadRequestException";
import { UnauthorizedClientException } from "./UnauthorizedClientException";
import { ResourceLimitExceededException } from "./ResourceLimitExceededException";
import { NotFoundException } from "./NotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
