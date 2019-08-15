import { GetUsagePlanKeyInput } from "../shapes/GetUsagePlanKeyInput";
import { GetUsagePlanKeyOutput } from "../shapes/GetUsagePlanKeyOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { NotFoundException } from "../shapes/NotFoundException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetUsagePlanKey: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetUsagePlanKey",
  http: {
    method: "GET",
    requestUri: "/usageplans/{usageplanId}/keys/{keyId}"
  },
  input: {
    shape: GetUsagePlanKeyInput
  },
  output: {
    shape: GetUsagePlanKeyOutput
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
