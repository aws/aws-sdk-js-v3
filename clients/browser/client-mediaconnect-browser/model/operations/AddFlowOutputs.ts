import { AddFlowOutputsInput } from "../shapes/AddFlowOutputsInput";
import { AddFlowOutputsOutput } from "../shapes/AddFlowOutputsOutput";
import { AddFlowOutputs420Exception } from "../shapes/AddFlowOutputs420Exception";
import { BadRequestException } from "../shapes/BadRequestException";
import { InternalServerErrorException } from "../shapes/InternalServerErrorException";
import { ForbiddenException } from "../shapes/ForbiddenException";
import { NotFoundException } from "../shapes/NotFoundException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const AddFlowOutputs: _Operation_ = {
  metadata: ServiceMetadata,
  name: "AddFlowOutputs",
  http: {
    method: "POST",
    requestUri: "/v1/flows/{flowArn}/outputs"
  },
  input: {
    shape: AddFlowOutputsInput
  },
  output: {
    shape: AddFlowOutputsOutput
  },
  errors: [
    {
      shape: AddFlowOutputs420Exception
    },
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
