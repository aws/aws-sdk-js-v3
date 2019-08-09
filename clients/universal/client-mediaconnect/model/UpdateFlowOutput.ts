import { UpdateFlowOutputInput } from "./UpdateFlowOutputInput";
import { UpdateFlowOutputOutput } from "./UpdateFlowOutputOutput";
import { BadRequestException } from "./BadRequestException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { ForbiddenException } from "./ForbiddenException";
import { NotFoundException } from "./NotFoundException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
