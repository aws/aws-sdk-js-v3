import { DeleteUsagePlanKeyInput } from "./DeleteUsagePlanKeyInput";
import { DeleteUsagePlanKeyOutput } from "./DeleteUsagePlanKeyOutput";
import { BadRequestException } from "./BadRequestException";
import { ConflictException } from "./ConflictException";
import { UnauthorizedException } from "./UnauthorizedException";
import { NotFoundException } from "./NotFoundException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
