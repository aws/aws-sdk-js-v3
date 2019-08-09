import { GetJobInput } from "./GetJobInput";
import { GetJobOutput } from "./GetJobOutput";
import { BadRequestException } from "./BadRequestException";
import { UnauthorizedException } from "./UnauthorizedException";
import { InternalFailureException } from "./InternalFailureException";
import { NotFoundException } from "./NotFoundException";
import { LimitExceededException } from "./LimitExceededException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetJob: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetJob",
  http: {
    method: "GET",
    requestUri: "/apps/{appId}/branches/{branchName}/jobs/{jobId}"
  },
  input: {
    shape: GetJobInput
  },
  output: {
    shape: GetJobOutput
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
