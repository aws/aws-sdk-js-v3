import { StartFlowInput } from "../shapes/StartFlowInput";
import { StartFlowOutput } from "../shapes/StartFlowOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { InternalServerErrorException } from "../shapes/InternalServerErrorException";
import { ForbiddenException } from "../shapes/ForbiddenException";
import { NotFoundException } from "../shapes/NotFoundException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const StartFlow: _Operation_ = {
  metadata: ServiceMetadata,
  name: "StartFlow",
  http: {
    method: "POST",
    requestUri: "/v1/flows/start/{flowArn}"
  },
  input: {
    shape: StartFlowInput
  },
  output: {
    shape: StartFlowOutput
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
