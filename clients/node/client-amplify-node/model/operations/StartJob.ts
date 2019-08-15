import { StartJobInput } from "../shapes/StartJobInput";
import { StartJobOutput } from "../shapes/StartJobOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { NotFoundException } from "../shapes/NotFoundException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const StartJob: _Operation_ = {
  metadata: ServiceMetadata,
  name: "StartJob",
  http: {
    method: "POST",
    requestUri: "/apps/{appId}/branches/{branchName}/jobs"
  },
  input: {
    shape: StartJobInput
  },
  output: {
    shape: StartJobOutput
  },
  errors: [
    {
      shape: BadRequestException
    },
    {
      shape: UnauthorizedException
    },
    {
      shape: InternalFailureException
    },
    {
      shape: NotFoundException
    },
    {
      shape: LimitExceededException
    }
  ]
};
