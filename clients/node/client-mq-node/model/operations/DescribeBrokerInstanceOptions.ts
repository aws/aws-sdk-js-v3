import { DescribeBrokerInstanceOptionsInput } from "../shapes/DescribeBrokerInstanceOptionsInput";
import { DescribeBrokerInstanceOptionsOutput } from "../shapes/DescribeBrokerInstanceOptionsOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { InternalServerErrorException } from "../shapes/InternalServerErrorException";
import { ForbiddenException } from "../shapes/ForbiddenException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeBrokerInstanceOptions: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeBrokerInstanceOptions",
  http: {
    method: "GET",
    requestUri: "/v1/broker-instance-options"
  },
  input: {
    shape: DescribeBrokerInstanceOptionsInput
  },
  output: {
    shape: DescribeBrokerInstanceOptionsOutput
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
    }
  ]
};
