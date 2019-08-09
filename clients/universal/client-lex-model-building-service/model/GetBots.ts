import { GetBotsInput } from "./GetBotsInput";
import { GetBotsOutput } from "./GetBotsOutput";
import { NotFoundException } from "./NotFoundException";
import { LimitExceededException } from "./LimitExceededException";
import { InternalFailureException } from "./InternalFailureException";
import { BadRequestException } from "./BadRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
