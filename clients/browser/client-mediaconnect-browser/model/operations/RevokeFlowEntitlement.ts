import { RevokeFlowEntitlementInput } from "../shapes/RevokeFlowEntitlementInput";
import { RevokeFlowEntitlementOutput } from "../shapes/RevokeFlowEntitlementOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { InternalServerErrorException } from "../shapes/InternalServerErrorException";
import { ForbiddenException } from "../shapes/ForbiddenException";
import { NotFoundException } from "../shapes/NotFoundException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const RevokeFlowEntitlement: _Operation_ = {
  metadata: ServiceMetadata,
  name: "RevokeFlowEntitlement",
  http: {
    method: "DELETE",
    requestUri: "/v1/flows/{flowArn}/entitlements/{entitlementArn}"
  },
  input: {
    shape: RevokeFlowEntitlementInput
  },
  output: {
    shape: RevokeFlowEntitlementOutput
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
