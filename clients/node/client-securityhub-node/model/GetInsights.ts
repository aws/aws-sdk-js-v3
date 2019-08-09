import { GetInsightsInput } from "./GetInsightsInput";
import { GetInsightsOutput } from "./GetInsightsOutput";
import { InternalException } from "./InternalException";
import { InvalidInputException } from "./InvalidInputException";
import { InvalidAccessException } from "./InvalidAccessException";
import { LimitExceededException } from "./LimitExceededException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
