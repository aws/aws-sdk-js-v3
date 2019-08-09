import { GetBotAliasesInput } from "./GetBotAliasesInput";
import { GetBotAliasesOutput } from "./GetBotAliasesOutput";
import { LimitExceededException } from "./LimitExceededException";
import { InternalFailureException } from "./InternalFailureException";
import { BadRequestException } from "./BadRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetBotAliases: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetBotAliases",
  http: {
    method: "GET",
    requestUri: "/bots/{botName}/aliases/"
  },
  input: {
    shape: GetBotAliasesInput
  },
  output: {
    shape: GetBotAliasesOutput
  },
  errors: [
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
