import { GetBotVersionsInput } from "./GetBotVersionsInput";
import { GetBotVersionsOutput } from "./GetBotVersionsOutput";
import { NotFoundException } from "./NotFoundException";
import { LimitExceededException } from "./LimitExceededException";
import { InternalFailureException } from "./InternalFailureException";
import { BadRequestException } from "./BadRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
