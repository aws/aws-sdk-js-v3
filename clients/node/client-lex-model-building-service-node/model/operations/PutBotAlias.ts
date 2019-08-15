import { PutBotAliasInput } from "../shapes/PutBotAliasInput";
import { PutBotAliasOutput } from "../shapes/PutBotAliasOutput";
import { ConflictException } from "../shapes/ConflictException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { BadRequestException } from "../shapes/BadRequestException";
import { PreconditionFailedException } from "../shapes/PreconditionFailedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const PutBotAlias: _Operation_ = {
  metadata: ServiceMetadata,
  name: "PutBotAlias",
  http: {
    method: "PUT",
    requestUri: "/bots/{botName}/aliases/{name}"
  },
  input: {
    shape: PutBotAliasInput
  },
  output: {
    shape: PutBotAliasOutput
  },
  errors: [
    {
      shape: ConflictException
    },
    {
      shape: LimitExceededException
    },
    {
      shape: InternalFailureException
    },
    {
      shape: BadRequestException
    },
    {
      shape: PreconditionFailedException
    }
  ]
};
