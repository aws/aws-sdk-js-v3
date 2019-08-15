import { DeletePolicyInput } from "../shapes/DeletePolicyInput";
import { DeletePolicyOutput } from "../shapes/DeletePolicyOutput";
import { DeleteConflictException } from "../shapes/DeleteConflictException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeletePolicy: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeletePolicy",
  http: {
    method: "DELETE",
    requestUri: "/policies/{policyName}"
  },
  input: {
    shape: DeletePolicyInput
  },
  output: {
    shape: DeletePolicyOutput
  },
  errors: [
    {
      shape: DeleteConflictException
    },
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
