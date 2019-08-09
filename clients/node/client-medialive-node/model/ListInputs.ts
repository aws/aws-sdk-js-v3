import { ListInputsInput } from "./ListInputsInput";
import { ListInputsOutput } from "./ListInputsOutput";
import { BadRequestException } from "./BadRequestException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { ForbiddenException } from "./ForbiddenException";
import { BadGatewayException } from "./BadGatewayException";
import { GatewayTimeoutException } from "./GatewayTimeoutException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ListInputs: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListInputs",
  http: {
    method: "GET",
    requestUri: "/prod/inputs"
  },
  input: {
    shape: ListInputsInput
  },
  output: {
    shape: ListInputsOutput
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
      shape: GatewayTimeoutException
    },
    {
      shape: TooManyRequestsException
    }
  ]
};
