import { DescribeOfferingInput } from "./DescribeOfferingInput";
import { DescribeOfferingOutput } from "./DescribeOfferingOutput";
import { BadRequestException } from "./BadRequestException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { ForbiddenException } from "./ForbiddenException";
import { BadGatewayException } from "./BadGatewayException";
import { NotFoundException } from "./NotFoundException";
import { GatewayTimeoutException } from "./GatewayTimeoutException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
