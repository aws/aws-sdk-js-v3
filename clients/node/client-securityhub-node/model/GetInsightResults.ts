import { GetInsightResultsInput } from "./GetInsightResultsInput";
import { GetInsightResultsOutput } from "./GetInsightResultsOutput";
import { InternalException } from "./InternalException";
import { InvalidInputException } from "./InvalidInputException";
import { InvalidAccessException } from "./InvalidAccessException";
import { LimitExceededException } from "./LimitExceededException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetInsightResults: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetInsightResults",
  http: {
    method: "GET",
    requestUri: "/insights/results/{InsightArn+}"
  },
  input: {
    shape: GetInsightResultsInput
  },
  output: {
    shape: GetInsightResultsOutput
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
