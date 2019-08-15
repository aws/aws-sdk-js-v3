import { GetBotInput } from "../shapes/GetBotInput";
import { GetBotOutput } from "../shapes/GetBotOutput";
import { NotFoundException } from "../shapes/NotFoundException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { BadRequestException } from "../shapes/BadRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
