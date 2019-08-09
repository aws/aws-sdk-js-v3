import { CreateUsagePlanInput } from "./CreateUsagePlanInput";
import { CreateUsagePlanOutput } from "./CreateUsagePlanOutput";
import { BadRequestException } from "./BadRequestException";
import { UnauthorizedException } from "./UnauthorizedException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { LimitExceededException } from "./LimitExceededException";
import { ConflictException } from "./ConflictException";
import { NotFoundException } from "./NotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
