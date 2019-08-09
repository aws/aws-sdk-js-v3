import { UpdateUsagePlanInput } from "./UpdateUsagePlanInput";
import { UpdateUsagePlanOutput } from "./UpdateUsagePlanOutput";
import { UnauthorizedException } from "./UnauthorizedException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { BadRequestException } from "./BadRequestException";
import { NotFoundException } from "./NotFoundException";
import { ConflictException } from "./ConflictException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
