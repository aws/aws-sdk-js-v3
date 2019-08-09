import { DeleteEventsConfigurationInput } from "./DeleteEventsConfigurationInput";
import { DeleteEventsConfigurationOutput } from "./DeleteEventsConfigurationOutput";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { ServiceFailureException } from "./ServiceFailureException";
import { ForbiddenException } from "./ForbiddenException";
import { BadRequestException } from "./BadRequestException";
import { UnauthorizedClientException } from "./UnauthorizedClientException";
import { ResourceLimitExceededException } from "./ResourceLimitExceededException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
