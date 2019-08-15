import { ListBotsInput } from "../shapes/ListBotsInput";
import { ListBotsOutput } from "../shapes/ListBotsOutput";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { ServiceFailureException } from "../shapes/ServiceFailureException";
import { ForbiddenException } from "../shapes/ForbiddenException";
import { UnauthorizedClientException } from "../shapes/UnauthorizedClientException";
import { BadRequestException } from "../shapes/BadRequestException";
import { NotFoundException } from "../shapes/NotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListBots: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListBots",
  http: {
    method: "GET",
    requestUri: "/accounts/{accountId}/bots"
  },
  input: {
    shape: ListBotsInput
  },
  output: {
    shape: ListBotsOutput
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
      shape: BadRequestException
    },
    {
      shape: NotFoundException
    }
  ]
};
