import { GetUsagePlanInput } from "../shapes/GetUsagePlanInput";
import { GetUsagePlanOutput } from "../shapes/GetUsagePlanOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { NotFoundException } from "../shapes/NotFoundException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetUsagePlan: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetUsagePlan",
  http: {
    method: "GET",
    requestUri: "/usageplans/{usageplanId}"
  },
  input: {
    shape: GetUsagePlanInput
  },
  output: {
    shape: GetUsagePlanOutput
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
