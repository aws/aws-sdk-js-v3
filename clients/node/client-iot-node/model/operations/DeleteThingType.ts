import { DeleteThingTypeInput } from "../shapes/DeleteThingTypeInput";
import { DeleteThingTypeOutput } from "../shapes/DeleteThingTypeOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
