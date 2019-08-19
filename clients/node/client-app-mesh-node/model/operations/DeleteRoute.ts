import { DeleteRouteInput } from "../shapes/DeleteRouteInput";
import { DeleteRouteOutput } from "../shapes/DeleteRouteOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { ForbiddenException } from "../shapes/ForbiddenException";
import { InternalServerErrorException } from "../shapes/InternalServerErrorException";
import { NotFoundException } from "../shapes/NotFoundException";
import { ResourceInUseException } from "../shapes/ResourceInUseException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteRoute: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteRoute",
  http: {
    method: "DELETE",
    requestUri:
      "/v20190125/meshes/{meshName}/virtualRouter/{virtualRouterName}/routes/{routeName}"
  },
  input: {
    shape: DeleteRouteInput
  },
  output: {
    shape: DeleteRouteOutput
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
