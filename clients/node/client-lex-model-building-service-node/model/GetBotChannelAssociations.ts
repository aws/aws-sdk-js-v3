import { GetBotChannelAssociationsInput } from "./GetBotChannelAssociationsInput";
import { GetBotChannelAssociationsOutput } from "./GetBotChannelAssociationsOutput";
import { LimitExceededException } from "./LimitExceededException";
import { InternalFailureException } from "./InternalFailureException";
import { BadRequestException } from "./BadRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
