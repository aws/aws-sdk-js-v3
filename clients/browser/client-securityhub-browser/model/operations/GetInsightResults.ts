import { GetInsightResultsInput } from "../shapes/GetInsightResultsInput";
import { GetInsightResultsOutput } from "../shapes/GetInsightResultsOutput";
import { InternalException } from "../shapes/InternalException";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { InvalidAccessException } from "../shapes/InvalidAccessException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
