import { DeleteInputInput } from "../shapes/DeleteInputInput";
import { DeleteInputOutput } from "../shapes/DeleteInputOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { InternalServerErrorException } from "../shapes/InternalServerErrorException";
import { ForbiddenException } from "../shapes/ForbiddenException";
import { BadGatewayException } from "../shapes/BadGatewayException";
import { NotFoundException } from "../shapes/NotFoundException";
import { GatewayTimeoutException } from "../shapes/GatewayTimeoutException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { ConflictException } from "../shapes/ConflictException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteInput: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteInput",
  http: {
    method: "DELETE",
    requestUri: "/prod/inputs/{inputId}"
  },
  input: {
    shape: DeleteInputInput
  },
  output: {
    shape: DeleteInputOutput
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
      shape: BadGatewayException
    },
    {
      shape: NotFoundException
    },
    {
      shape: GatewayTimeoutException
    },
    {
      shape: TooManyRequestsException
    },
    {
      shape: ConflictException
    }
  ]
};
