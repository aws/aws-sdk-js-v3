import { ListFlowsInput } from "../shapes/ListFlowsInput";
import { ListFlowsOutput } from "../shapes/ListFlowsOutput";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { BadRequestException } from "../shapes/BadRequestException";
import { InternalServerErrorException } from "../shapes/InternalServerErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListFlows: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListFlows",
  http: {
    method: "GET",
    requestUri: "/v1/flows"
  },
  input: {
    shape: ListFlowsInput
  },
  output: {
    shape: ListFlowsOutput
  },
  errors: [
    {
      shape: ServiceUnavailableException
    },
    {
      shape: TooManyRequestsException
    },
    {
      shape: BadRequestException
    },
    {
      shape: InternalServerErrorException
    }
  ]
};
