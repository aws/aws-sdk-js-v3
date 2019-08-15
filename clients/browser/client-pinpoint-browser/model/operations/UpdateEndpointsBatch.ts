import { UpdateEndpointsBatchInput } from "../shapes/UpdateEndpointsBatchInput";
import { UpdateEndpointsBatchOutput } from "../shapes/UpdateEndpointsBatchOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { InternalServerErrorException } from "../shapes/InternalServerErrorException";
import { ForbiddenException } from "../shapes/ForbiddenException";
import { NotFoundException } from "../shapes/NotFoundException";
import { MethodNotAllowedException } from "../shapes/MethodNotAllowedException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateEndpointsBatch: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateEndpointsBatch",
  http: {
    method: "PUT",
    requestUri: "/v1/apps/{application-id}/endpoints"
  },
  input: {
    shape: UpdateEndpointsBatchInput
  },
  output: {
    shape: UpdateEndpointsBatchOutput
  },
  errors: [
    {
      shape: BadRequestException
    },
    {
      shape: InternalServerErrorException
    },
    {
      shape: ForbiddenException
    },
    {
      shape: NotFoundException
    },
    {
      shape: MethodNotAllowedException
    },
    {
      shape: TooManyRequestsException
    }
  ]
};
