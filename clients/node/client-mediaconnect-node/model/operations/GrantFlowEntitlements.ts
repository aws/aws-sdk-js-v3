import { GrantFlowEntitlementsInput } from "../shapes/GrantFlowEntitlementsInput";
import { GrantFlowEntitlementsOutput } from "../shapes/GrantFlowEntitlementsOutput";
import { GrantFlowEntitlements420Exception } from "../shapes/GrantFlowEntitlements420Exception";
import { BadRequestException } from "../shapes/BadRequestException";
import { InternalServerErrorException } from "../shapes/InternalServerErrorException";
import { ForbiddenException } from "../shapes/ForbiddenException";
import { NotFoundException } from "../shapes/NotFoundException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GrantFlowEntitlements: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GrantFlowEntitlements",
  http: {
    method: "POST",
    requestUri: "/v1/flows/{flowArn}/entitlements"
  },
  input: {
    shape: GrantFlowEntitlementsInput
  },
  output: {
    shape: GrantFlowEntitlementsOutput
  },
  errors: [
    {
      shape: GrantFlowEntitlements420Exception
    },
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
