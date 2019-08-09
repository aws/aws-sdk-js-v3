import { GetBotAliasInput } from "./GetBotAliasInput";
import { GetBotAliasOutput } from "./GetBotAliasOutput";
import { NotFoundException } from "./NotFoundException";
import { LimitExceededException } from "./LimitExceededException";
import { InternalFailureException } from "./InternalFailureException";
import { BadRequestException } from "./BadRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetBotAlias: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetBotAlias",
  http: {
    method: "GET",
    requestUri: "/bots/{botName}/aliases/{name}"
  },
  input: {
    shape: GetBotAliasInput
  },
  output: {
    shape: GetBotAliasOutput
  },
  errors: [
    {
      shape: NotFoundException
    },
    {
      shape: LimitExceededException
    },
    {
      shape: InternalFailureException
    },
    {
      shape: BadRequestException
    }
  ]
};
