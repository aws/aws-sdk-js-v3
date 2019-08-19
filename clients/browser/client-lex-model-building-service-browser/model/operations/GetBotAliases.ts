import { GetBotAliasesInput } from "../shapes/GetBotAliasesInput";
import { GetBotAliasesOutput } from "../shapes/GetBotAliasesOutput";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { BadRequestException } from "../shapes/BadRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
