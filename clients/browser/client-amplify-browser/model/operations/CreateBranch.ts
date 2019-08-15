import { CreateBranchInput } from "../shapes/CreateBranchInput";
import { CreateBranchOutput } from "../shapes/CreateBranchOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { NotFoundException } from "../shapes/NotFoundException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { DependentServiceFailureException } from "../shapes/DependentServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
