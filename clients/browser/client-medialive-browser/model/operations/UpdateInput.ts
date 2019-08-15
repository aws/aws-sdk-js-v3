import { UpdateInputInput } from "../shapes/UpdateInputInput";
import { UpdateInputOutput } from "../shapes/UpdateInputOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { InternalServerErrorException } from "../shapes/InternalServerErrorException";
import { ForbiddenException } from "../shapes/ForbiddenException";
import { BadGatewayException } from "../shapes/BadGatewayException";
import { NotFoundException } from "../shapes/NotFoundException";
import { GatewayTimeoutException } from "../shapes/GatewayTimeoutException";
import { ConflictException } from "../shapes/ConflictException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateInput: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateInput",
  http: {
    method: "PUT",
    requestUri: "/prod/inputs/{inputId}"
  },
  input: {
    shape: UpdateInputInput
  },
  output: {
    shape: UpdateInputOutput
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
      shape: ConflictException
    }
  ]
};
