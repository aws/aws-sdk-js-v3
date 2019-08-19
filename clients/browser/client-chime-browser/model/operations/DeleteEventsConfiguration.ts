import { DeleteEventsConfigurationInput } from "../shapes/DeleteEventsConfigurationInput";
import { DeleteEventsConfigurationOutput } from "../shapes/DeleteEventsConfigurationOutput";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { ServiceFailureException } from "../shapes/ServiceFailureException";
import { ForbiddenException } from "../shapes/ForbiddenException";
import { BadRequestException } from "../shapes/BadRequestException";
import { UnauthorizedClientException } from "../shapes/UnauthorizedClientException";
import { ResourceLimitExceededException } from "../shapes/ResourceLimitExceededException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteEventsConfiguration: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteEventsConfiguration",
  http: {
    method: "DELETE",
    requestUri: "/accounts/{accountId}/bots/{botId}/events-configuration"
  },
  input: {
    shape: DeleteEventsConfigurationInput
  },
  output: {
    shape: DeleteEventsConfigurationOutput
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
    }
  ]
};
