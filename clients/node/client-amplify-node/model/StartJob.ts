import { StartJobInput } from "./StartJobInput";
import { StartJobOutput } from "./StartJobOutput";
import { BadRequestException } from "./BadRequestException";
import { UnauthorizedException } from "./UnauthorizedException";
import { InternalFailureException } from "./InternalFailureException";
import { NotFoundException } from "./NotFoundException";
import { LimitExceededException } from "./LimitExceededException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
