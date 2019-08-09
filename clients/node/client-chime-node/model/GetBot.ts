import { GetBotInput } from "./GetBotInput";
import { GetBotOutput } from "./GetBotOutput";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { ServiceFailureException } from "./ServiceFailureException";
import { ForbiddenException } from "./ForbiddenException";
import { UnauthorizedClientException } from "./UnauthorizedClientException";
import { NotFoundException } from "./NotFoundException";
import { BadRequestException } from "./BadRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
