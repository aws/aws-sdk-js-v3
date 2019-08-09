import { DescribeBrokerInput } from "./DescribeBrokerInput";
import { DescribeBrokerOutput } from "./DescribeBrokerOutput";
import { NotFoundException } from "./NotFoundException";
import { BadRequestException } from "./BadRequestException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { ForbiddenException } from "./ForbiddenException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
