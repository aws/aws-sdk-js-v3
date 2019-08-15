import { ListUserGroupsInput } from "../shapes/ListUserGroupsInput";
import { ListUserGroupsOutput } from "../shapes/ListUserGroupsOutput";
import { AccessDeniedException } from "../shapes/AccessDeniedException";
import { InvalidParameterValueException } from "../shapes/InvalidParameterValueException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { ResourceUnavailableException } from "../shapes/ResourceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListUserGroups: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListUserGroups",
  http: {
    method: "GET",
    requestUri:
      "/accounts/{AwsAccountId}/namespaces/{Namespace}/users/{UserName}/groups"
  },
  input: {
    shape: ListUserGroupsInput
  },
  output: {
    shape: ListUserGroupsOutput
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
