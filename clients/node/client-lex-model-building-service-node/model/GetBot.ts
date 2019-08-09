import { GetBotInput } from "./GetBotInput";
import { GetBotOutput } from "./GetBotOutput";
import { NotFoundException } from "./NotFoundException";
import { LimitExceededException } from "./LimitExceededException";
import { InternalFailureException } from "./InternalFailureException";
import { BadRequestException } from "./BadRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetBot: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetBot",
  http: {
    method: "GET",
    requestUri: "/bots/{name}/versions/{versionoralias}"
  },
  input: {
    shape: GetBotInput
  },
  output: {
    shape: GetBotOutput
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
