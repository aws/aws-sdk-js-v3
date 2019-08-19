import { DescribeOfferingInput } from "../shapes/DescribeOfferingInput";
import { DescribeOfferingOutput } from "../shapes/DescribeOfferingOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { InternalServerErrorException } from "../shapes/InternalServerErrorException";
import { ForbiddenException } from "../shapes/ForbiddenException";
import { BadGatewayException } from "../shapes/BadGatewayException";
import { NotFoundException } from "../shapes/NotFoundException";
import { GatewayTimeoutException } from "../shapes/GatewayTimeoutException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeOffering: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeOffering",
  http: {
    method: "GET",
    requestUri: "/prod/offerings/{offeringId}"
  },
  input: {
    shape: DescribeOfferingInput
  },
  output: {
    shape: DescribeOfferingOutput
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
