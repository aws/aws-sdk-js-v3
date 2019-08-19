import { GetBotInput } from "../shapes/GetBotInput";
import { GetBotOutput } from "../shapes/GetBotOutput";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { ServiceFailureException } from "../shapes/ServiceFailureException";
import { ForbiddenException } from "../shapes/ForbiddenException";
import { UnauthorizedClientException } from "../shapes/UnauthorizedClientException";
import { NotFoundException } from "../shapes/NotFoundException";
import { BadRequestException } from "../shapes/BadRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetBot: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetBot",
  http: {
    method: "GET",
    requestUri: "/accounts/{accountId}/bots/{botId}"
  },
  input: {
    shape: GetBotInput
  },
  output: {
    shape: GetBotOutput
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
      shape: UnauthorizedClientException
    },
    {
      shape: NotFoundException
    },
    {
      shape: BadRequestException
    }
  ]
};
