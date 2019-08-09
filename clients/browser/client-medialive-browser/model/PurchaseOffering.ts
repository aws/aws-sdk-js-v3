import { PurchaseOfferingInput } from "./PurchaseOfferingInput";
import { PurchaseOfferingOutput } from "./PurchaseOfferingOutput";
import { BadRequestException } from "./BadRequestException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { ForbiddenException } from "./ForbiddenException";
import { BadGatewayException } from "./BadGatewayException";
import { NotFoundException } from "./NotFoundException";
import { GatewayTimeoutException } from "./GatewayTimeoutException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { ConflictException } from "./ConflictException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
