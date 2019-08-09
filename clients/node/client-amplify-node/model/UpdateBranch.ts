import { UpdateBranchInput } from "./UpdateBranchInput";
import { UpdateBranchOutput } from "./UpdateBranchOutput";
import { BadRequestException } from "./BadRequestException";
import { UnauthorizedException } from "./UnauthorizedException";
import { NotFoundException } from "./NotFoundException";
import { InternalFailureException } from "./InternalFailureException";
import { DependentServiceFailureException } from "./DependentServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const UpdateBranch: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateBranch",
  http: {
    method: "POST",
    requestUri: "/apps/{appId}/branches/{branchName}"
  },
  input: {
    shape: UpdateBranchInput
  },
  output: {
    shape: UpdateBranchOutput
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
