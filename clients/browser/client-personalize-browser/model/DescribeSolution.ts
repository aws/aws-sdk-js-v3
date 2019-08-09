import { DescribeSolutionInput } from "./DescribeSolutionInput";
import { DescribeSolutionOutput } from "./DescribeSolutionOutput";
import { InvalidInputException } from "./InvalidInputException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
