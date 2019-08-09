import { RemoveFlowOutputInput } from "./RemoveFlowOutputInput";
import { RemoveFlowOutputOutput } from "./RemoveFlowOutputOutput";
import { BadRequestException } from "./BadRequestException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { ForbiddenException } from "./ForbiddenException";
import { NotFoundException } from "./NotFoundException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
