import { UpdateUsageInput } from "./UpdateUsageInput";
import { UpdateUsageOutput } from "./UpdateUsageOutput";
import { UnauthorizedException } from "./UnauthorizedException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { BadRequestException } from "./BadRequestException";
import { NotFoundException } from "./NotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
