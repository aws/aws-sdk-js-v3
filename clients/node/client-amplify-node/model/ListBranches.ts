import { ListBranchesInput } from "./ListBranchesInput";
import { ListBranchesOutput } from "./ListBranchesOutput";
import { BadRequestException } from "./BadRequestException";
import { UnauthorizedException } from "./UnauthorizedException";
import { InternalFailureException } from "./InternalFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
