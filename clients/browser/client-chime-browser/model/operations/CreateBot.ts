import { CreateBotInput } from "../shapes/CreateBotInput";
import { CreateBotOutput } from "../shapes/CreateBotOutput";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { ServiceFailureException } from "../shapes/ServiceFailureException";
import { ForbiddenException } from "../shapes/ForbiddenException";
import { BadRequestException } from "../shapes/BadRequestException";
import { UnauthorizedClientException } from "../shapes/UnauthorizedClientException";
import { ResourceLimitExceededException } from "../shapes/ResourceLimitExceededException";
import { NotFoundException } from "../shapes/NotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateBot: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateBot",
  http: {
    method: "POST",
    requestUri: "/accounts/{accountId}/bots"
  },
  input: {
    shape: CreateBotInput
  },
  output: {
    shape: CreateBotOutput
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
