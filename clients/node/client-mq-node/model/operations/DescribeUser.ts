import { DescribeUserInput } from "../shapes/DescribeUserInput";
import { DescribeUserOutput } from "../shapes/DescribeUserOutput";
import { NotFoundException } from "../shapes/NotFoundException";
import { BadRequestException } from "../shapes/BadRequestException";
import { InternalServerErrorException } from "../shapes/InternalServerErrorException";
import { ForbiddenException } from "../shapes/ForbiddenException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeUser: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeUser",
  http: {
    method: "GET",
    requestUri: "/v1/brokers/{broker-id}/users/{username}"
  },
  input: {
    shape: DescribeUserInput
  },
  output: {
    shape: DescribeUserOutput
  },
  errors: [
    {
      shape: NotFoundException
    },
    {
      shape: BadRequestException
    },
    {
      shape: InternalServerErrorException
    },
    {
      shape: ForbiddenException
    }
  ]
};
