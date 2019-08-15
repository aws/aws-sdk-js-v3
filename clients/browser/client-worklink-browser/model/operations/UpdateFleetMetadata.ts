import { UpdateFleetMetadataInput } from "../shapes/UpdateFleetMetadataInput";
import { UpdateFleetMetadataOutput } from "../shapes/UpdateFleetMetadataOutput";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { InternalServerErrorException } from "../shapes/InternalServerErrorException";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateFleetMetadata: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateFleetMetadata",
  http: {
    method: "POST",
    requestUri: "/UpdateFleetMetadata"
  },
  input: {
    shape: UpdateFleetMetadataInput
  },
  output: {
    shape: UpdateFleetMetadataOutput
  },
  errors: [
    {
      shape: UnauthorizedException
    },
    {
      shape: InternalServerErrorException
    },
    {
      shape: InvalidRequestException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: TooManyRequestsException
    }
  ]
};
