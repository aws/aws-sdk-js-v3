import { ListBotsInput } from "./ListBotsInput";
import { ListBotsOutput } from "./ListBotsOutput";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { ServiceFailureException } from "./ServiceFailureException";
import { ForbiddenException } from "./ForbiddenException";
import { UnauthorizedClientException } from "./UnauthorizedClientException";
import { BadRequestException } from "./BadRequestException";
import { NotFoundException } from "./NotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
