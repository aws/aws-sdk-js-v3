import { ListVirtualNodesInput } from "./ListVirtualNodesInput";
import { ListVirtualNodesOutput } from "./ListVirtualNodesOutput";
import { BadRequestException } from "./BadRequestException";
import { ForbiddenException } from "./ForbiddenException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { NotFoundException } from "./NotFoundException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
