import { DeleteThingInput } from "./DeleteThingInput";
import { DeleteThingOutput } from "./DeleteThingOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { VersionConflictException } from "./VersionConflictException";
import { InvalidRequestException } from "./InvalidRequestException";
import { ThrottlingException } from "./ThrottlingException";
import { UnauthorizedException } from "./UnauthorizedException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { InternalFailureException } from "./InternalFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
