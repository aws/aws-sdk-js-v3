import { DeleteThingTypeInput } from "./DeleteThingTypeInput";
import { DeleteThingTypeOutput } from "./DeleteThingTypeOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidRequestException } from "./InvalidRequestException";
import { ThrottlingException } from "./ThrottlingException";
import { UnauthorizedException } from "./UnauthorizedException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { InternalFailureException } from "./InternalFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DeleteThingType: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteThingType",
  http: {
    method: "DELETE",
    requestUri: "/thing-types/{thingTypeName}"
  },
  input: {
    shape: DeleteThingTypeInput
  },
  output: {
    shape: DeleteThingTypeOutput
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
