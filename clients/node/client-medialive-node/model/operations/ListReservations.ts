import { ListReservationsInput } from "../shapes/ListReservationsInput";
import { ListReservationsOutput } from "../shapes/ListReservationsOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { InternalServerErrorException } from "../shapes/InternalServerErrorException";
import { ForbiddenException } from "../shapes/ForbiddenException";
import { BadGatewayException } from "../shapes/BadGatewayException";
import { GatewayTimeoutException } from "../shapes/GatewayTimeoutException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListReservations: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListReservations",
  http: {
    method: "GET",
    requestUri: "/prod/reservations"
  },
  input: {
    shape: ListReservationsInput
  },
  output: {
    shape: ListReservationsOutput
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
