import { GetUsagePlanKeysInput } from "./GetUsagePlanKeysInput";
import { GetUsagePlanKeysOutput } from "./GetUsagePlanKeysOutput";
import { BadRequestException } from "./BadRequestException";
import { UnauthorizedException } from "./UnauthorizedException";
import { NotFoundException } from "./NotFoundException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
