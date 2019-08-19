import { DeleteUserInput } from "../shapes/DeleteUserInput";
import { DeleteUserOutput } from "../shapes/DeleteUserOutput";
import { AccessDeniedException } from "../shapes/AccessDeniedException";
import { InvalidParameterValueException } from "../shapes/InvalidParameterValueException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { ResourceUnavailableException } from "../shapes/ResourceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteUser: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteUser",
  http: {
    method: "DELETE",
    requestUri:
      "/accounts/{AwsAccountId}/namespaces/{Namespace}/users/{UserName}"
  },
  input: {
    shape: DeleteUserInput
  },
  output: {
    shape: DeleteUserOutput
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
