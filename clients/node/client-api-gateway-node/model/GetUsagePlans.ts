import { GetUsagePlansInput } from "./GetUsagePlansInput";
import { GetUsagePlansOutput } from "./GetUsagePlansOutput";
import { BadRequestException } from "./BadRequestException";
import { UnauthorizedException } from "./UnauthorizedException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { ConflictException } from "./ConflictException";
import { NotFoundException } from "./NotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
