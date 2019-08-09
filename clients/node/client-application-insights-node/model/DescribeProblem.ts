import { DescribeProblemInput } from "./DescribeProblemInput";
import { DescribeProblemOutput } from "./DescribeProblemOutput";
import { InternalServerException } from "./InternalServerException";
import { ValidationException } from "./ValidationException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
