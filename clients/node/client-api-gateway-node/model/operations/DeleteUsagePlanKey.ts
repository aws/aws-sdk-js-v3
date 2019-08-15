import { DeleteUsagePlanKeyInput } from "../shapes/DeleteUsagePlanKeyInput";
import { DeleteUsagePlanKeyOutput } from "../shapes/DeleteUsagePlanKeyOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { ConflictException } from "../shapes/ConflictException";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { NotFoundException } from "../shapes/NotFoundException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteUsagePlanKey: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteUsagePlanKey",
  http: {
    method: "DELETE",
    requestUri: "/usageplans/{usageplanId}/keys/{keyId}"
  },
  input: {
    shape: DeleteUsagePlanKeyInput
  },
  output: {
    shape: DeleteUsagePlanKeyOutput
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
