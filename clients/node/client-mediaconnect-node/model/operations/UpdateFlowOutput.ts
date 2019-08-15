import { UpdateFlowOutputInput } from "../shapes/UpdateFlowOutputInput";
import { UpdateFlowOutputOutput } from "../shapes/UpdateFlowOutputOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { InternalServerErrorException } from "../shapes/InternalServerErrorException";
import { ForbiddenException } from "../shapes/ForbiddenException";
import { NotFoundException } from "../shapes/NotFoundException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateFlowOutput: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateFlowOutput",
  http: {
    method: "PUT",
    requestUri: "/v1/flows/{flowArn}/outputs/{outputArn}"
  },
  input: {
    shape: UpdateFlowOutputInput
  },
  output: {
    shape: UpdateFlowOutputOutput
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
      shape: ServiceUnavailableException
    },
    {
      shape: TooManyRequestsException
    }
  ]
};
