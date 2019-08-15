import { UpdateUsagePlanInput } from "../shapes/UpdateUsagePlanInput";
import { UpdateUsagePlanOutput } from "../shapes/UpdateUsagePlanOutput";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { BadRequestException } from "../shapes/BadRequestException";
import { NotFoundException } from "../shapes/NotFoundException";
import { ConflictException } from "../shapes/ConflictException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateUsagePlan: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateUsagePlan",
  http: {
    method: "PATCH",
    requestUri: "/usageplans/{usageplanId}"
  },
  input: {
    shape: UpdateUsagePlanInput
  },
  output: {
    shape: UpdateUsagePlanOutput
  },
  errors: [
    {
      shape: UnauthorizedException
    },
    {
      shape: TooManyRequestsException
    },
    {
      shape: BadRequestException
    },
    {
      shape: NotFoundException
    },
    {
      shape: ConflictException
    }
  ]
};
