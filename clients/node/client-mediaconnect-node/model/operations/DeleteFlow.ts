import { DeleteFlowInput } from "../shapes/DeleteFlowInput";
import { DeleteFlowOutput } from "../shapes/DeleteFlowOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { InternalServerErrorException } from "../shapes/InternalServerErrorException";
import { ForbiddenException } from "../shapes/ForbiddenException";
import { NotFoundException } from "../shapes/NotFoundException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteFlow: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteFlow",
  http: {
    method: "DELETE",
    requestUri: "/v1/flows/{flowArn}"
  },
  input: {
    shape: DeleteFlowInput
  },
  output: {
    shape: DeleteFlowOutput
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
