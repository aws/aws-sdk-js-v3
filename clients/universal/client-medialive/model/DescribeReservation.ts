import { DescribeReservationInput } from "./DescribeReservationInput";
import { DescribeReservationOutput } from "./DescribeReservationOutput";
import { BadRequestException } from "./BadRequestException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { ForbiddenException } from "./ForbiddenException";
import { BadGatewayException } from "./BadGatewayException";
import { NotFoundException } from "./NotFoundException";
import { GatewayTimeoutException } from "./GatewayTimeoutException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DescribeReservation: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeReservation",
  http: {
    method: "GET",
    requestUri: "/prod/reservations/{reservationId}"
  },
  input: {
    shape: DescribeReservationInput
  },
  output: {
    shape: DescribeReservationOutput
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
    }
  ]
};
