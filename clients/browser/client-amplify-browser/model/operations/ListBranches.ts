import { ListBranchesInput } from "../shapes/ListBranchesInput";
import { ListBranchesOutput } from "../shapes/ListBranchesOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListBranches: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListBranches",
  http: {
    method: "GET",
    requestUri: "/apps/{appId}/branches"
  },
  input: {
    shape: ListBranchesInput
  },
  output: {
    shape: ListBranchesOutput
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
    }
  ]
};
