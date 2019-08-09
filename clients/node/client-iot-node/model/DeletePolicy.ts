import { DeletePolicyInput } from "./DeletePolicyInput";
import { DeletePolicyOutput } from "./DeletePolicyOutput";
import { DeleteConflictException } from "./DeleteConflictException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidRequestException } from "./InvalidRequestException";
import { ThrottlingException } from "./ThrottlingException";
import { UnauthorizedException } from "./UnauthorizedException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { InternalFailureException } from "./InternalFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
