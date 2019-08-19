import { AttachThingPrincipalInput } from "../shapes/AttachThingPrincipalInput";
import { AttachThingPrincipalOutput } from "../shapes/AttachThingPrincipalOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const AttachThingPrincipal: _Operation_ = {
  metadata: ServiceMetadata,
  name: "AttachThingPrincipal",
  http: {
    method: "PUT",
    requestUri: "/things/{thingName}/principals"
  },
  input: {
    shape: AttachThingPrincipalInput
  },
  output: {
    shape: AttachThingPrincipalOutput
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
