import { GrantFlowEntitlementsInput } from "./GrantFlowEntitlementsInput";
import { GrantFlowEntitlementsOutput } from "./GrantFlowEntitlementsOutput";
import { GrantFlowEntitlements420Exception } from "./GrantFlowEntitlements420Exception";
import { BadRequestException } from "./BadRequestException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { ForbiddenException } from "./ForbiddenException";
import { NotFoundException } from "./NotFoundException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
