import { UpdateEndpointsBatchInput } from "./UpdateEndpointsBatchInput";
import { UpdateEndpointsBatchOutput } from "./UpdateEndpointsBatchOutput";
import { BadRequestException } from "./BadRequestException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { ForbiddenException } from "./ForbiddenException";
import { NotFoundException } from "./NotFoundException";
import { MethodNotAllowedException } from "./MethodNotAllowedException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
