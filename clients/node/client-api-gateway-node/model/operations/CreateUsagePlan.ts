import { CreateUsagePlanInput } from "../shapes/CreateUsagePlanInput";
import { CreateUsagePlanOutput } from "../shapes/CreateUsagePlanOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { ConflictException } from "../shapes/ConflictException";
import { NotFoundException } from "../shapes/NotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateUsagePlan: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateUsagePlan",
  http: {
    method: "POST",
    requestUri: "/usageplans"
  },
  input: {
    shape: CreateUsagePlanInput
  },
  output: {
    shape: CreateUsagePlanOutput
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
      shape: LimitExceededException
    },
    {
      shape: ConflictException
    },
    {
      shape: NotFoundException
    }
  ]
};
