import { DeleteVirtualServiceInput } from "../shapes/DeleteVirtualServiceInput";
import { DeleteVirtualServiceOutput } from "../shapes/DeleteVirtualServiceOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { ForbiddenException } from "../shapes/ForbiddenException";
import { InternalServerErrorException } from "../shapes/InternalServerErrorException";
import { NotFoundException } from "../shapes/NotFoundException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteVirtualService: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteVirtualService",
  http: {
    method: "DELETE",
    requestUri:
      "/v20190125/meshes/{meshName}/virtualServices/{virtualServiceName}"
  },
  input: {
    shape: DeleteVirtualServiceInput
  },
  output: {
    shape: DeleteVirtualServiceOutput
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
