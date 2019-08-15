import { GetBotsInput } from "../shapes/GetBotsInput";
import { GetBotsOutput } from "../shapes/GetBotsOutput";
import { NotFoundException } from "../shapes/NotFoundException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { BadRequestException } from "../shapes/BadRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetBots: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetBots",
  http: {
    method: "GET",
    requestUri: "/bots/"
  },
  input: {
    shape: GetBotsInput
  },
  output: {
    shape: GetBotsOutput
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
