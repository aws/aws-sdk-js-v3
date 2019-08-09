import { StartFlowInput } from "./StartFlowInput";
import { StartFlowOutput } from "./StartFlowOutput";
import { BadRequestException } from "./BadRequestException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { ForbiddenException } from "./ForbiddenException";
import { NotFoundException } from "./NotFoundException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
