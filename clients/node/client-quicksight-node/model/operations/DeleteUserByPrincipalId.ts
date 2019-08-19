import { DeleteUserByPrincipalIdInput } from "../shapes/DeleteUserByPrincipalIdInput";
import { DeleteUserByPrincipalIdOutput } from "../shapes/DeleteUserByPrincipalIdOutput";
import { AccessDeniedException } from "../shapes/AccessDeniedException";
import { InvalidParameterValueException } from "../shapes/InvalidParameterValueException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { ResourceUnavailableException } from "../shapes/ResourceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteUserByPrincipalId: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteUserByPrincipalId",
  http: {
    method: "DELETE",
    requestUri:
      "/accounts/{AwsAccountId}/namespaces/{Namespace}/user-principals/{PrincipalId}"
  },
  input: {
    shape: DeleteUserByPrincipalIdInput
  },
  output: {
    shape: DeleteUserByPrincipalIdOutput
  },
  errors: [
    {
      shape: AccessDeniedException
    },
    {
      shape: InvalidParameterValueException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: ThrottlingException
    },
    {
      shape: InternalFailureException
    },
    {
      shape: ResourceUnavailableException
    }
  ]
};
