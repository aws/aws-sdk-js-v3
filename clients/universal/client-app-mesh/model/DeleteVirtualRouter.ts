import { DeleteVirtualRouterInput } from "./DeleteVirtualRouterInput";
import { DeleteVirtualRouterOutput } from "./DeleteVirtualRouterOutput";
import { BadRequestException } from "./BadRequestException";
import { ForbiddenException } from "./ForbiddenException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { NotFoundException } from "./NotFoundException";
import { ResourceInUseException } from "./ResourceInUseException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DeleteVirtualRouter: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteVirtualRouter",
  http: {
    method: "DELETE",
    requestUri:
      "/v20190125/meshes/{meshName}/virtualRouters/{virtualRouterName}"
  },
  input: {
    shape: DeleteVirtualRouterInput
  },
  output: {
    shape: DeleteVirtualRouterOutput
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
      shape: ResourceInUseException
    },
    {
      shape: ServiceUnavailableException
    },
    {
      shape: TooManyRequestsException
    }
  ]
};
