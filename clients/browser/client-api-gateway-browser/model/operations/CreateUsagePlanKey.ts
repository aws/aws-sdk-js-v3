import { CreateUsagePlanKeyInput } from "../shapes/CreateUsagePlanKeyInput";
import { CreateUsagePlanKeyOutput } from "../shapes/CreateUsagePlanKeyOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { ConflictException } from "../shapes/ConflictException";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { NotFoundException } from "../shapes/NotFoundException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateUsagePlanKey: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateUsagePlanKey",
  http: {
    method: "POST",
    requestUri: "/usageplans/{usageplanId}/keys"
  },
  input: {
    shape: CreateUsagePlanKeyInput
  },
  output: {
    shape: CreateUsagePlanKeyOutput
  },
  errors: [
    {
      shape: BadRequestException
    },
    {
      shape: ConflictException
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
