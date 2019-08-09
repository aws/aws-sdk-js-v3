import { DeleteUsagePlanInput } from "./DeleteUsagePlanInput";
import { DeleteUsagePlanOutput } from "./DeleteUsagePlanOutput";
import { UnauthorizedException } from "./UnauthorizedException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { BadRequestException } from "./BadRequestException";
import { NotFoundException } from "./NotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
