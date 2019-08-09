import { StopJobInput } from "./StopJobInput";
import { StopJobOutput } from "./StopJobOutput";
import { BadRequestException } from "./BadRequestException";
import { UnauthorizedException } from "./UnauthorizedException";
import { InternalFailureException } from "./InternalFailureException";
import { NotFoundException } from "./NotFoundException";
import { LimitExceededException } from "./LimitExceededException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
