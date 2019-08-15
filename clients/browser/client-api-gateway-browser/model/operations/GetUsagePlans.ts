import { GetUsagePlansInput } from "../shapes/GetUsagePlansInput";
import { GetUsagePlansOutput } from "../shapes/GetUsagePlansOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { ConflictException } from "../shapes/ConflictException";
import { NotFoundException } from "../shapes/NotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetUsagePlans: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetUsagePlans",
  http: {
    method: "GET",
    requestUri: "/usageplans"
  },
  input: {
    shape: GetUsagePlansInput
  },
  output: {
    shape: GetUsagePlansOutput
  },
  errors: [
    {
      shape: BadRequestException
    },
    {
      shape: UnauthorizedException
    },
    {
      shape: TooManyRequestsException
    },
    {
      shape: ConflictException
    },
    {
      shape: NotFoundException
    }
  ]
};
