import { GetUsagePlanInput } from "./GetUsagePlanInput";
import { GetUsagePlanOutput } from "./GetUsagePlanOutput";
import { BadRequestException } from "./BadRequestException";
import { UnauthorizedException } from "./UnauthorizedException";
import { NotFoundException } from "./NotFoundException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
