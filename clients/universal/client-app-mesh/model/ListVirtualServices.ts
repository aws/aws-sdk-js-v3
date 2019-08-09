import { ListVirtualServicesInput } from "./ListVirtualServicesInput";
import { ListVirtualServicesOutput } from "./ListVirtualServicesOutput";
import { BadRequestException } from "./BadRequestException";
import { ForbiddenException } from "./ForbiddenException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { NotFoundException } from "./NotFoundException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ListVirtualServices: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListVirtualServices",
  http: {
    method: "GET",
    requestUri: "/v20190125/meshes/{meshName}/virtualServices"
  },
  input: {
    shape: ListVirtualServicesInput
  },
  output: {
    shape: ListVirtualServicesOutput
  },
  errors: [
    {
      shape: BadRequestException
    },
    {
      shape: ForbiddenException
    },
    {
      shape: InternalServerErrorException
    },
    {
      shape: NotFoundException
    },
    {
      shape: ServiceUnavailableException
    },
    {
      shape: TooManyRequestsException
    }
  ]
};
