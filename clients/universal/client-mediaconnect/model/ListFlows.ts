import { ListFlowsInput } from "./ListFlowsInput";
import { ListFlowsOutput } from "./ListFlowsOutput";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { BadRequestException } from "./BadRequestException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
