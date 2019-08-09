import { DeleteBranchInput } from "./DeleteBranchInput";
import { DeleteBranchOutput } from "./DeleteBranchOutput";
import { BadRequestException } from "./BadRequestException";
import { UnauthorizedException } from "./UnauthorizedException";
import { NotFoundException } from "./NotFoundException";
import { InternalFailureException } from "./InternalFailureException";
import { DependentServiceFailureException } from "./DependentServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
