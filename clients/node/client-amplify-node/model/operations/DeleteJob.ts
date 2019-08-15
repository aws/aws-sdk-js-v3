import { DeleteJobInput } from "../shapes/DeleteJobInput";
import { DeleteJobOutput } from "../shapes/DeleteJobOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { NotFoundException } from "../shapes/NotFoundException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteJob: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteJob",
  http: {
    method: "DELETE",
    requestUri: "/apps/{appId}/branches/{branchName}/jobs/{jobId}"
  },
  input: {
    shape: DeleteJobInput
  },
  output: {
    shape: DeleteJobOutput
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
