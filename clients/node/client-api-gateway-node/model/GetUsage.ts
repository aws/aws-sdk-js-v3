import { GetUsageInput } from "./GetUsageInput";
import { GetUsageOutput } from "./GetUsageOutput";
import { BadRequestException } from "./BadRequestException";
import { UnauthorizedException } from "./UnauthorizedException";
import { NotFoundException } from "./NotFoundException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetUsage: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetUsage",
  http: {
    method: "GET",
    requestUri: "/usageplans/{usageplanId}/usage"
  },
  input: {
    shape: GetUsageInput
  },
  output: {
    shape: GetUsageOutput
  },
  errors: [
    {
      shape: BadRequestException
    },
    {
      shape: UnauthorizedException
    },
    {
      shape: NotFoundException
    },
    {
      shape: TooManyRequestsException
    }
  ]
};
