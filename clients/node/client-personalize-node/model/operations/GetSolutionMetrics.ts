import { GetSolutionMetricsInput } from "../shapes/GetSolutionMetricsInput";
import { GetSolutionMetricsOutput } from "../shapes/GetSolutionMetricsOutput";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { ResourceInUseException } from "../shapes/ResourceInUseException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
