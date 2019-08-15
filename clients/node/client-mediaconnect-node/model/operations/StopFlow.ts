import { StopFlowInput } from "../shapes/StopFlowInput";
import { StopFlowOutput } from "../shapes/StopFlowOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { InternalServerErrorException } from "../shapes/InternalServerErrorException";
import { ForbiddenException } from "../shapes/ForbiddenException";
import { NotFoundException } from "../shapes/NotFoundException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const StopFlow: _Operation_ = {
  metadata: ServiceMetadata,
  name: "StopFlow",
  http: {
    method: "POST",
    requestUri: "/v1/flows/stop/{flowArn}"
  },
  input: {
    shape: StopFlowInput
  },
  output: {
    shape: StopFlowOutput
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
