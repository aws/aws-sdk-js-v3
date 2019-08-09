import { CreateUsagePlanKeyInput } from "./CreateUsagePlanKeyInput";
import { CreateUsagePlanKeyOutput } from "./CreateUsagePlanKeyOutput";
import { BadRequestException } from "./BadRequestException";
import { ConflictException } from "./ConflictException";
import { UnauthorizedException } from "./UnauthorizedException";
import { NotFoundException } from "./NotFoundException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
