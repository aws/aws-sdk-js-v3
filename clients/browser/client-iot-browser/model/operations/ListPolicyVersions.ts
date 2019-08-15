import { ListPolicyVersionsInput } from "../shapes/ListPolicyVersionsInput";
import { ListPolicyVersionsOutput } from "../shapes/ListPolicyVersionsOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
