import { GetUsagePlanKeyInput } from "./GetUsagePlanKeyInput";
import { GetUsagePlanKeyOutput } from "./GetUsagePlanKeyOutput";
import { BadRequestException } from "./BadRequestException";
import { UnauthorizedException } from "./UnauthorizedException";
import { NotFoundException } from "./NotFoundException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
