import { PurchaseOfferingInput } from "../shapes/PurchaseOfferingInput";
import { PurchaseOfferingOutput } from "../shapes/PurchaseOfferingOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { InternalServerErrorException } from "../shapes/InternalServerErrorException";
import { ForbiddenException } from "../shapes/ForbiddenException";
import { BadGatewayException } from "../shapes/BadGatewayException";
import { NotFoundException } from "../shapes/NotFoundException";
import { GatewayTimeoutException } from "../shapes/GatewayTimeoutException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { ConflictException } from "../shapes/ConflictException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const PurchaseOffering: _Operation_ = {
  metadata: ServiceMetadata,
  name: "PurchaseOffering",
  http: {
    method: "POST",
    requestUri: "/prod/offerings/{offeringId}/purchase"
  },
  input: {
    shape: PurchaseOfferingInput
  },
  output: {
    shape: PurchaseOfferingOutput
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
      shape: BadGatewayException
    },
    {
      shape: NotFoundException
    },
    {
      shape: GatewayTimeoutException
    },
    {
      shape: TooManyRequestsException
    },
    {
      shape: ConflictException
    }
  ]
};
