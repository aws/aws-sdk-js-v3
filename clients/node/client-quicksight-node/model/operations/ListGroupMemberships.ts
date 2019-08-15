import { ListGroupMembershipsInput } from "../shapes/ListGroupMembershipsInput";
import { ListGroupMembershipsOutput } from "../shapes/ListGroupMembershipsOutput";
import { AccessDeniedException } from "../shapes/AccessDeniedException";
import { InvalidParameterValueException } from "../shapes/InvalidParameterValueException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { InvalidNextTokenException } from "../shapes/InvalidNextTokenException";
import { PreconditionNotMetException } from "../shapes/PreconditionNotMetException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { ResourceUnavailableException } from "../shapes/ResourceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
