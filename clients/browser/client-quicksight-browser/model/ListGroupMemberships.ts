import { ListGroupMembershipsInput } from "./ListGroupMembershipsInput";
import { ListGroupMembershipsOutput } from "./ListGroupMembershipsOutput";
import { AccessDeniedException } from "./AccessDeniedException";
import { InvalidParameterValueException } from "./InvalidParameterValueException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ThrottlingException } from "./ThrottlingException";
import { InvalidNextTokenException } from "./InvalidNextTokenException";
import { PreconditionNotMetException } from "./PreconditionNotMetException";
import { InternalFailureException } from "./InternalFailureException";
import { ResourceUnavailableException } from "./ResourceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ListGroupMemberships: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListGroupMemberships",
  http: {
    method: "GET",
    requestUri:
      "/accounts/{AwsAccountId}/namespaces/{Namespace}/groups/{GroupName}/members"
  },
  input: {
    shape: ListGroupMembershipsInput
  },
  output: {
    shape: ListGroupMembershipsOutput
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
      shape: PreconditionNotMetException
    },
    {
      shape: InternalFailureException
    },
    {
      shape: ResourceUnavailableException
    }
  ]
};
