import { UpdateBotInput } from "../shapes/UpdateBotInput";
import { UpdateBotOutput } from "../shapes/UpdateBotOutput";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { ServiceFailureException } from "../shapes/ServiceFailureException";
import { ForbiddenException } from "../shapes/ForbiddenException";
import { BadRequestException } from "../shapes/BadRequestException";
import { UnauthorizedClientException } from "../shapes/UnauthorizedClientException";
import { NotFoundException } from "../shapes/NotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateBot: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateBot",
  http: {
    method: "POST",
    requestUri: "/accounts/{accountId}/bots/{botId}"
  },
  input: {
    shape: UpdateBotInput
  },
  output: {
    shape: UpdateBotOutput
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
      shape: NotFoundException
    }
  ]
};
