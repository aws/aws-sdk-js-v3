import { GetBotChannelAssociationsInput } from "../shapes/GetBotChannelAssociationsInput";
import { GetBotChannelAssociationsOutput } from "../shapes/GetBotChannelAssociationsOutput";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { BadRequestException } from "../shapes/BadRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetBotChannelAssociations: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetBotChannelAssociations",
  http: {
    method: "GET",
    requestUri: "/bots/{botName}/aliases/{aliasName}/channels/"
  },
  input: {
    shape: GetBotChannelAssociationsInput
  },
  output: {
    shape: GetBotChannelAssociationsOutput
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
