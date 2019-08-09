import { DescribeBrokerEngineTypesInput } from "./DescribeBrokerEngineTypesInput";
import { DescribeBrokerEngineTypesOutput } from "./DescribeBrokerEngineTypesOutput";
import { BadRequestException } from "./BadRequestException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { ForbiddenException } from "./ForbiddenException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
