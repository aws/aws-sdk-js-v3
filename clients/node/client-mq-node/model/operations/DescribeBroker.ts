import { DescribeBrokerInput } from "../shapes/DescribeBrokerInput";
import { DescribeBrokerOutput } from "../shapes/DescribeBrokerOutput";
import { NotFoundException } from "../shapes/NotFoundException";
import { BadRequestException } from "../shapes/BadRequestException";
import { InternalServerErrorException } from "../shapes/InternalServerErrorException";
import { ForbiddenException } from "../shapes/ForbiddenException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeBroker: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeBroker",
  http: {
    method: "GET",
    requestUri: "/v1/brokers/{broker-id}"
  },
  input: {
    shape: DescribeBrokerInput
  },
  output: {
    shape: DescribeBrokerOutput
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
