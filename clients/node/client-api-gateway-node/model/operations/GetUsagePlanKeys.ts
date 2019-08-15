import { GetUsagePlanKeysInput } from "../shapes/GetUsagePlanKeysInput";
import { GetUsagePlanKeysOutput } from "../shapes/GetUsagePlanKeysOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { NotFoundException } from "../shapes/NotFoundException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetUsagePlanKeys: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetUsagePlanKeys",
  http: {
    method: "GET",
    requestUri: "/usageplans/{usageplanId}/keys"
  },
  input: {
    shape: GetUsagePlanKeysInput
  },
  output: {
    shape: GetUsagePlanKeysOutput
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
