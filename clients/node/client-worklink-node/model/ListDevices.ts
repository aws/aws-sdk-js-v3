import { ListDevicesInput } from "./ListDevicesInput";
import { ListDevicesOutput } from "./ListDevicesOutput";
import { UnauthorizedException } from "./UnauthorizedException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { InvalidRequestException } from "./InvalidRequestException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ListDevices: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListDevices",
  http: {
    method: "POST",
    requestUri: "/listDevices"
  },
  input: {
    shape: ListDevicesInput
  },
  output: {
    shape: ListDevicesOutput
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
