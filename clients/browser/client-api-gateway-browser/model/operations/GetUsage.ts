import { GetUsageInput } from "../shapes/GetUsageInput";
import { GetUsageOutput } from "../shapes/GetUsageOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { NotFoundException } from "../shapes/NotFoundException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
