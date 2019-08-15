import { DescribeSolutionInput } from "../shapes/DescribeSolutionInput";
import { DescribeSolutionOutput } from "../shapes/DescribeSolutionOutput";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeSolution: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeSolution",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeSolutionInput
  },
  output: {
    shape: DescribeSolutionOutput
  },
  errors: [
    {
      shape: InvalidInputException
    },
    {
      shape: ResourceNotFoundException
    }
  ]
};
