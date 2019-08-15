import { DescribeBrokerEngineTypesInput } from "../shapes/DescribeBrokerEngineTypesInput";
import { DescribeBrokerEngineTypesOutput } from "../shapes/DescribeBrokerEngineTypesOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { InternalServerErrorException } from "../shapes/InternalServerErrorException";
import { ForbiddenException } from "../shapes/ForbiddenException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeBrokerEngineTypes: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeBrokerEngineTypes",
  http: {
    method: "GET",
    requestUri: "/v1/broker-engine-types"
  },
  input: {
    shape: DescribeBrokerEngineTypesInput
  },
  output: {
    shape: DescribeBrokerEngineTypesOutput
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
