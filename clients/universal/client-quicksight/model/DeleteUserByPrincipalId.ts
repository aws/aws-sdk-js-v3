import { DeleteUserByPrincipalIdInput } from "./DeleteUserByPrincipalIdInput";
import { DeleteUserByPrincipalIdOutput } from "./DeleteUserByPrincipalIdOutput";
import { AccessDeniedException } from "./AccessDeniedException";
import { InvalidParameterValueException } from "./InvalidParameterValueException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ThrottlingException } from "./ThrottlingException";
import { InternalFailureException } from "./InternalFailureException";
import { ResourceUnavailableException } from "./ResourceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
