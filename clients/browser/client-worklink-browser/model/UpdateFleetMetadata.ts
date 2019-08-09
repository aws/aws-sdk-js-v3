import { UpdateFleetMetadataInput } from "./UpdateFleetMetadataInput";
import { UpdateFleetMetadataOutput } from "./UpdateFleetMetadataOutput";
import { UnauthorizedException } from "./UnauthorizedException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { InvalidRequestException } from "./InvalidRequestException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
