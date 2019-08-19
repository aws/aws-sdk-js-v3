import { ListGroupsInput } from "../shapes/ListGroupsInput";
import { ListGroupsOutput } from "../shapes/ListGroupsOutput";
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

export const ListGroups: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListGroups",
  http: {
    method: "GET",
    requestUri: "/accounts/{AwsAccountId}/namespaces/{Namespace}/groups"
  },
  input: {
    shape: ListGroupsInput
  },
  output: {
    shape: ListGroupsOutput
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
