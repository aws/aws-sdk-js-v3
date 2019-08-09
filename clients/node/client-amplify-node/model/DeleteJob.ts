import { DeleteJobInput } from "./DeleteJobInput";
import { DeleteJobOutput } from "./DeleteJobOutput";
import { BadRequestException } from "./BadRequestException";
import { UnauthorizedException } from "./UnauthorizedException";
import { InternalFailureException } from "./InternalFailureException";
import { NotFoundException } from "./NotFoundException";
import { LimitExceededException } from "./LimitExceededException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
