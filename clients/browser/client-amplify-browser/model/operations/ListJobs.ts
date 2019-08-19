import { ListJobsInput } from "../shapes/ListJobsInput";
import { ListJobsOutput } from "../shapes/ListJobsOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListJobs: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListJobs",
  http: {
    method: "GET",
    requestUri: "/apps/{appId}/branches/{branchName}/jobs"
  },
  input: {
    shape: ListJobsInput
  },
  output: {
    shape: ListJobsOutput
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
      shape: LimitExceededException
    }
  ]
};
