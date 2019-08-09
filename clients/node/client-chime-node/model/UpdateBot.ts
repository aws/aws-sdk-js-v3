import { UpdateBotInput } from "./UpdateBotInput";
import { UpdateBotOutput } from "./UpdateBotOutput";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { ServiceFailureException } from "./ServiceFailureException";
import { ForbiddenException } from "./ForbiddenException";
import { BadRequestException } from "./BadRequestException";
import { UnauthorizedClientException } from "./UnauthorizedClientException";
import { NotFoundException } from "./NotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
