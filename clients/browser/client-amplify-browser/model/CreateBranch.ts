import { CreateBranchInput } from "./CreateBranchInput";
import { CreateBranchOutput } from "./CreateBranchOutput";
import { BadRequestException } from "./BadRequestException";
import { UnauthorizedException } from "./UnauthorizedException";
import { NotFoundException } from "./NotFoundException";
import { InternalFailureException } from "./InternalFailureException";
import { LimitExceededException } from "./LimitExceededException";
import { DependentServiceFailureException } from "./DependentServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const CreateBranch: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateBranch",
  http: {
    method: "POST",
    requestUri: "/apps/{appId}/branches"
  },
  input: {
    shape: CreateBranchInput
  },
  output: {
    shape: CreateBranchOutput
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
      shape: LimitExceededException
    },
    {
      shape: DependentServiceFailureException
    }
  ]
};
