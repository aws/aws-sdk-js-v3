import { AddFlowOutputsInput } from "./AddFlowOutputsInput";
import { AddFlowOutputsOutput } from "./AddFlowOutputsOutput";
import { AddFlowOutputs420Exception } from "./AddFlowOutputs420Exception";
import { BadRequestException } from "./BadRequestException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { ForbiddenException } from "./ForbiddenException";
import { NotFoundException } from "./NotFoundException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
