import { DetachThingPrincipalInput } from "../shapes/DetachThingPrincipalInput";
import { DetachThingPrincipalOutput } from "../shapes/DetachThingPrincipalOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DetachThingPrincipal: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DetachThingPrincipal",
  http: {
    method: "DELETE",
    requestUri: "/things/{thingName}/principals"
  },
  input: {
    shape: DetachThingPrincipalInput
  },
  output: {
    shape: DetachThingPrincipalOutput
  },
  errors: [
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
