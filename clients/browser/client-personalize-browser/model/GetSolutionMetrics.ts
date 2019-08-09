import { GetSolutionMetricsInput } from "./GetSolutionMetricsInput";
import { GetSolutionMetricsOutput } from "./GetSolutionMetricsOutput";
import { InvalidInputException } from "./InvalidInputException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ResourceInUseException } from "./ResourceInUseException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetSolutionMetrics: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetSolutionMetrics",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetSolutionMetricsInput
  },
  output: {
    shape: GetSolutionMetricsOutput
  },
  errors: [
    {
      shape: InvalidInputException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: ResourceInUseException
    }
  ]
};
