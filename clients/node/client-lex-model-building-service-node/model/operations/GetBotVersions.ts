import { GetBotVersionsInput } from "../shapes/GetBotVersionsInput";
import { GetBotVersionsOutput } from "../shapes/GetBotVersionsOutput";
import { NotFoundException } from "../shapes/NotFoundException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { BadRequestException } from "../shapes/BadRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetBotVersions: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetBotVersions",
  http: {
    method: "GET",
    requestUri: "/bots/{name}/versions/"
  },
  input: {
    shape: GetBotVersionsInput
  },
  output: {
    shape: GetBotVersionsOutput
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
