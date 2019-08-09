import { PutBotAliasInput } from "./PutBotAliasInput";
import { PutBotAliasOutput } from "./PutBotAliasOutput";
import { ConflictException } from "./ConflictException";
import { LimitExceededException } from "./LimitExceededException";
import { InternalFailureException } from "./InternalFailureException";
import { BadRequestException } from "./BadRequestException";
import { PreconditionFailedException } from "./PreconditionFailedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
