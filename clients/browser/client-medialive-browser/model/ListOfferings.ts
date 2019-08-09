import { ListOfferingsInput } from "./ListOfferingsInput";
import { ListOfferingsOutput } from "./ListOfferingsOutput";
import { BadRequestException } from "./BadRequestException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { ForbiddenException } from "./ForbiddenException";
import { BadGatewayException } from "./BadGatewayException";
import { GatewayTimeoutException } from "./GatewayTimeoutException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
