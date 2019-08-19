import { DeleteUsagePlanInput } from "../shapes/DeleteUsagePlanInput";
import { DeleteUsagePlanOutput } from "../shapes/DeleteUsagePlanOutput";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { BadRequestException } from "../shapes/BadRequestException";
import { NotFoundException } from "../shapes/NotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteUsagePlan: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteUsagePlan",
  http: {
    method: "DELETE",
    requestUri: "/usageplans/{usageplanId}"
  },
  input: {
    shape: DeleteUsagePlanInput
  },
  output: {
    shape: DeleteUsagePlanOutput
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
