import { UpdateFlowEntitlementInput } from "./UpdateFlowEntitlementInput";
import { UpdateFlowEntitlementOutput } from "./UpdateFlowEntitlementOutput";
import { BadRequestException } from "./BadRequestException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { ForbiddenException } from "./ForbiddenException";
import { NotFoundException } from "./NotFoundException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
