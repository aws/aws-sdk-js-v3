import { ListVirtualNodesInput } from "../shapes/ListVirtualNodesInput";
import { ListVirtualNodesOutput } from "../shapes/ListVirtualNodesOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { ForbiddenException } from "../shapes/ForbiddenException";
import { InternalServerErrorException } from "../shapes/InternalServerErrorException";
import { NotFoundException } from "../shapes/NotFoundException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListVirtualNodes: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListVirtualNodes",
  http: {
    method: "GET",
    requestUri: "/v20190125/meshes/{meshName}/virtualNodes"
  },
  input: {
    shape: ListVirtualNodesInput
  },
  output: {
    shape: ListVirtualNodesOutput
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
