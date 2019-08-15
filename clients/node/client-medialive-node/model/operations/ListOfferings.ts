import { ListOfferingsInput } from "../shapes/ListOfferingsInput";
import { ListOfferingsOutput } from "../shapes/ListOfferingsOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { InternalServerErrorException } from "../shapes/InternalServerErrorException";
import { ForbiddenException } from "../shapes/ForbiddenException";
import { BadGatewayException } from "../shapes/BadGatewayException";
import { GatewayTimeoutException } from "../shapes/GatewayTimeoutException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListOfferings: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListOfferings",
  http: {
    method: "GET",
    requestUri: "/prod/offerings"
  },
  input: {
    shape: ListOfferingsInput
  },
  output: {
    shape: ListOfferingsOutput
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
      shape: GatewayTimeoutException
    },
    {
      shape: TooManyRequestsException
    }
  ]
};
