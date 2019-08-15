import { DeleteThingInput } from "../shapes/DeleteThingInput";
import { DeleteThingOutput } from "../shapes/DeleteThingOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { VersionConflictException } from "../shapes/VersionConflictException";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteThing: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteThing",
  http: {
    method: "DELETE",
    requestUri: "/things/{thingName}"
  },
  input: {
    shape: DeleteThingInput
  },
  output: {
    shape: DeleteThingOutput
  },
  errors: [
    {
      shape: ResourceNotFoundException
    },
    {
      shape: VersionConflictException
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
