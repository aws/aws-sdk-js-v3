import { GetBranchInput } from "./GetBranchInput";
import { GetBranchOutput } from "./GetBranchOutput";
import { BadRequestException } from "./BadRequestException";
import { UnauthorizedException } from "./UnauthorizedException";
import { NotFoundException } from "./NotFoundException";
import { InternalFailureException } from "./InternalFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
