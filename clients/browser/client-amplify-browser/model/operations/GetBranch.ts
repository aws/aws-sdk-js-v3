import { GetBranchInput } from "../shapes/GetBranchInput";
import { GetBranchOutput } from "../shapes/GetBranchOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { NotFoundException } from "../shapes/NotFoundException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetBranch: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetBranch",
  http: {
    method: "GET",
    requestUri: "/apps/{appId}/branches/{branchName}"
  },
  input: {
    shape: GetBranchInput
  },
  output: {
    shape: GetBranchOutput
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
    }
  ]
};
