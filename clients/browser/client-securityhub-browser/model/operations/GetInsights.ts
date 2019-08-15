import { GetInsightsInput } from "../shapes/GetInsightsInput";
import { GetInsightsOutput } from "../shapes/GetInsightsOutput";
import { InternalException } from "../shapes/InternalException";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { InvalidAccessException } from "../shapes/InvalidAccessException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetInsights: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetInsights",
  http: {
    method: "POST",
    requestUri: "/insights/get"
  },
  input: {
    shape: GetInsightsInput
  },
  output: {
    shape: GetInsightsOutput
  },
  errors: [
    {
      shape: InternalException
    },
    {
      shape: InvalidInputException
    },
    {
      shape: InvalidAccessException
    },
    {
      shape: LimitExceededException
    },
    {
      shape: ResourceNotFoundException
    }
  ]
};
