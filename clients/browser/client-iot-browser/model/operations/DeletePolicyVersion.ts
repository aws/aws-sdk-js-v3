import { DeletePolicyVersionInput } from "../shapes/DeletePolicyVersionInput";
import { DeletePolicyVersionOutput } from "../shapes/DeletePolicyVersionOutput";
import { DeleteConflictException } from "../shapes/DeleteConflictException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeletePolicyVersion: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeletePolicyVersion",
  http: {
    method: "DELETE",
    requestUri: "/policies/{policyName}/version/{policyVersionId}"
  },
  input: {
    shape: DeletePolicyVersionInput
  },
  output: {
    shape: DeletePolicyVersionOutput
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
