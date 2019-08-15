import { ListPrincipalThingsInput } from "../shapes/ListPrincipalThingsInput";
import { ListPrincipalThingsOutput } from "../shapes/ListPrincipalThingsOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListPrincipalThings: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListPrincipalThings",
  http: {
    method: "GET",
    requestUri: "/principals/things"
  },
  input: {
    shape: ListPrincipalThingsInput
  },
  output: {
    shape: ListPrincipalThingsOutput
  },
  errors: [
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
    },
    {
      shape: ResourceNotFoundException
    }
  ]
};
