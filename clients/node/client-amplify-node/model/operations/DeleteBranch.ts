import { DeleteBranchInput } from "../shapes/DeleteBranchInput";
import { DeleteBranchOutput } from "../shapes/DeleteBranchOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { NotFoundException } from "../shapes/NotFoundException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { DependentServiceFailureException } from "../shapes/DependentServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteBranch: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteBranch",
  http: {
    method: "DELETE",
    requestUri: "/apps/{appId}/branches/{branchName}"
  },
  input: {
    shape: DeleteBranchInput
  },
  output: {
    shape: DeleteBranchOutput
  },
  errors: [
    {
      shape: BadRequestException
    },
    {
      shape: UnauthorizedException
    },
    {
      shape: NotFoundException
    },
    {
      shape: InternalFailureException
    },
    {
      shape: DependentServiceFailureException
    }
  ]
};
