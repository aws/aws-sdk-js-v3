import { UpdateInputInput } from "./UpdateInputInput";
import { UpdateInputOutput } from "./UpdateInputOutput";
import { BadRequestException } from "./BadRequestException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { ForbiddenException } from "./ForbiddenException";
import { BadGatewayException } from "./BadGatewayException";
import { NotFoundException } from "./NotFoundException";
import { GatewayTimeoutException } from "./GatewayTimeoutException";
import { ConflictException } from "./ConflictException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
