import { UpdateFlowSourceInput } from "../shapes/UpdateFlowSourceInput";
import { UpdateFlowSourceOutput } from "../shapes/UpdateFlowSourceOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { InternalServerErrorException } from "../shapes/InternalServerErrorException";
import { ForbiddenException } from "../shapes/ForbiddenException";
import { NotFoundException } from "../shapes/NotFoundException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateFlowSource: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateFlowSource",
  http: {
    method: "PUT",
    requestUri: "/v1/flows/{flowArn}/source/{sourceArn}"
  },
  input: {
    shape: UpdateFlowSourceInput
  },
  output: {
    shape: UpdateFlowSourceOutput
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
