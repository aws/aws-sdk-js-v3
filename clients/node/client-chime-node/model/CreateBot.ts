import { CreateBotInput } from "./CreateBotInput";
import { CreateBotOutput } from "./CreateBotOutput";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { ServiceFailureException } from "./ServiceFailureException";
import { ForbiddenException } from "./ForbiddenException";
import { BadRequestException } from "./BadRequestException";
import { UnauthorizedClientException } from "./UnauthorizedClientException";
import { ResourceLimitExceededException } from "./ResourceLimitExceededException";
import { NotFoundException } from "./NotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
