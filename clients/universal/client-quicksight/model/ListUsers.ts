import { ListUsersInput } from "./ListUsersInput";
import { ListUsersOutput } from "./ListUsersOutput";
import { AccessDeniedException } from "./AccessDeniedException";
import { InvalidParameterValueException } from "./InvalidParameterValueException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ThrottlingException } from "./ThrottlingException";
import { InvalidNextTokenException } from "./InvalidNextTokenException";
import { InternalFailureException } from "./InternalFailureException";
import { ResourceUnavailableException } from "./ResourceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ListUsers: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListUsers",
  http: {
    method: "GET",
    requestUri: "/accounts/{AwsAccountId}/namespaces/{Namespace}/users"
  },
  input: {
    shape: ListUsersInput
  },
  output: {
    shape: ListUsersOutput
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
      shape: InvalidNextTokenException
    },
    {
      shape: InternalFailureException
    },
    {
      shape: ResourceUnavailableException
    }
  ]
};
