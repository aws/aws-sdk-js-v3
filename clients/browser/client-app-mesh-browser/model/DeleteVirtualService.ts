import { DeleteVirtualServiceInput } from "./DeleteVirtualServiceInput";
import { DeleteVirtualServiceOutput } from "./DeleteVirtualServiceOutput";
import { BadRequestException } from "./BadRequestException";
import { ForbiddenException } from "./ForbiddenException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { NotFoundException } from "./NotFoundException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
