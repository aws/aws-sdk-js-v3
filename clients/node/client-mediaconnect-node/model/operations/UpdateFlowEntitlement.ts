import { UpdateFlowEntitlementInput } from "../shapes/UpdateFlowEntitlementInput";
import { UpdateFlowEntitlementOutput } from "../shapes/UpdateFlowEntitlementOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { InternalServerErrorException } from "../shapes/InternalServerErrorException";
import { ForbiddenException } from "../shapes/ForbiddenException";
import { NotFoundException } from "../shapes/NotFoundException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateFlowEntitlement: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateFlowEntitlement",
  http: {
    method: "PUT",
    requestUri: "/v1/flows/{flowArn}/entitlements/{entitlementArn}"
  },
  input: {
    shape: UpdateFlowEntitlementInput
  },
  output: {
    shape: UpdateFlowEntitlementOutput
  },
  errors: [
    {
      shape: BadRequestException
    },
    {
      shape: InternalServerErrorException
    },
    {
      shape: ForbiddenException
    },
    {
      shape: NotFoundException
    },
    {
      shape: ServiceUnavailableException
    },
    {
      shape: TooManyRequestsException
    }
  ]
};
