import { ListVirtualRoutersInput } from "../shapes/ListVirtualRoutersInput";
import { ListVirtualRoutersOutput } from "../shapes/ListVirtualRoutersOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { ForbiddenException } from "../shapes/ForbiddenException";
import { InternalServerErrorException } from "../shapes/InternalServerErrorException";
import { NotFoundException } from "../shapes/NotFoundException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListVirtualRouters: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListVirtualRouters",
  http: {
    method: "GET",
    requestUri: "/v20190125/meshes/{meshName}/virtualRouters"
  },
  input: {
    shape: ListVirtualRoutersInput
  },
  output: {
    shape: ListVirtualRoutersOutput
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
