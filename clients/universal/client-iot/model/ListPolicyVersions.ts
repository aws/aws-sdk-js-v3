import { ListPolicyVersionsInput } from "./ListPolicyVersionsInput";
import { ListPolicyVersionsOutput } from "./ListPolicyVersionsOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidRequestException } from "./InvalidRequestException";
import { ThrottlingException } from "./ThrottlingException";
import { UnauthorizedException } from "./UnauthorizedException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { InternalFailureException } from "./InternalFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ListPolicyVersions: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListPolicyVersions",
  http: {
    method: "GET",
    requestUri: "/policies/{policyName}/version"
  },
  input: {
    shape: ListPolicyVersionsInput
  },
  output: {
    shape: ListPolicyVersionsOutput
  },
  errors: [
    {
      shape: ResourceNotFoundException
    },
    {
      shape: InvalidRequestException
    },
    {
      shape: ThrottlingException
    },
    {
      shape: UnauthorizedException
    },
    {
      shape: ServiceUnavailableException
    },
    {
      shape: InternalFailureException
    }
  ]
};
