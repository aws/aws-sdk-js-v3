import { RevokeFlowEntitlementInput } from "./RevokeFlowEntitlementInput";
import { RevokeFlowEntitlementOutput } from "./RevokeFlowEntitlementOutput";
import { BadRequestException } from "./BadRequestException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { ForbiddenException } from "./ForbiddenException";
import { NotFoundException } from "./NotFoundException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
