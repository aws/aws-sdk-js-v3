import { DetachThingPrincipalInput } from "./DetachThingPrincipalInput";
import { DetachThingPrincipalOutput } from "./DetachThingPrincipalOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidRequestException } from "./InvalidRequestException";
import { ThrottlingException } from "./ThrottlingException";
import { UnauthorizedException } from "./UnauthorizedException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { InternalFailureException } from "./InternalFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
