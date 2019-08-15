import { DescribeProblemInput } from "../shapes/DescribeProblemInput";
import { DescribeProblemOutput } from "../shapes/DescribeProblemOutput";
import { InternalServerException } from "../shapes/InternalServerException";
import { ValidationException } from "../shapes/ValidationException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeProblem: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeProblem",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeProblemInput
  },
  output: {
    shape: DescribeProblemOutput
  },
  errors: [
    {
      shape: InternalServerException
    },
    {
      shape: ValidationException
    },
    {
      shape: ResourceNotFoundException
    }
  ]
};
