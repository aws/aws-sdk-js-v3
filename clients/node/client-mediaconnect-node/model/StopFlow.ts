import { StopFlowInput } from "./StopFlowInput";
import { StopFlowOutput } from "./StopFlowOutput";
import { BadRequestException } from "./BadRequestException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { ForbiddenException } from "./ForbiddenException";
import { NotFoundException } from "./NotFoundException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
