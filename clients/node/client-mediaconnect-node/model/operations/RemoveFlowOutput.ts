import { RemoveFlowOutputInput } from "../shapes/RemoveFlowOutputInput";
import { RemoveFlowOutputOutput } from "../shapes/RemoveFlowOutputOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { InternalServerErrorException } from "../shapes/InternalServerErrorException";
import { ForbiddenException } from "../shapes/ForbiddenException";
import { NotFoundException } from "../shapes/NotFoundException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const RemoveFlowOutput: _Operation_ = {
  metadata: ServiceMetadata,
  name: "RemoveFlowOutput",
  http: {
    method: "DELETE",
    requestUri: "/v1/flows/{flowArn}/outputs/{outputArn}"
  },
  input: {
    shape: RemoveFlowOutputInput
  },
  output: {
    shape: RemoveFlowOutputOutput
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
