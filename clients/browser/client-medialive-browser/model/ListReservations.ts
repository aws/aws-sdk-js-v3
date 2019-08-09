import { ListReservationsInput } from "./ListReservationsInput";
import { ListReservationsOutput } from "./ListReservationsOutput";
import { BadRequestException } from "./BadRequestException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { ForbiddenException } from "./ForbiddenException";
import { BadGatewayException } from "./BadGatewayException";
import { GatewayTimeoutException } from "./GatewayTimeoutException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
