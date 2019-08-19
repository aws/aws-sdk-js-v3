import { UpdateUsageInput } from "../shapes/UpdateUsageInput";
import { UpdateUsageOutput } from "../shapes/UpdateUsageOutput";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { BadRequestException } from "../shapes/BadRequestException";
import { NotFoundException } from "../shapes/NotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateUsage: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateUsage",
  http: {
    method: "PATCH",
    requestUri: "/usageplans/{usageplanId}/keys/{keyId}/usage"
  },
  input: {
    shape: UpdateUsageInput
  },
  output: {
    shape: UpdateUsageOutput
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
    }
  ]
};
