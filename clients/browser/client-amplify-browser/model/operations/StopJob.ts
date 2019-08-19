import { StopJobInput } from "../shapes/StopJobInput";
import { StopJobOutput } from "../shapes/StopJobOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { NotFoundException } from "../shapes/NotFoundException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const StopJob: _Operation_ = {
  metadata: ServiceMetadata,
  name: "StopJob",
  http: {
    method: "DELETE",
    requestUri: "/apps/{appId}/branches/{branchName}/jobs/{jobId}/stop"
  },
  input: {
    shape: StopJobInput
  },
  output: {
    shape: StopJobOutput
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
