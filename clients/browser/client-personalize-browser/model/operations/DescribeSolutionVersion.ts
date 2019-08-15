import { DescribeSolutionVersionInput } from "../shapes/DescribeSolutionVersionInput";
import { DescribeSolutionVersionOutput } from "../shapes/DescribeSolutionVersionOutput";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeSolutionVersion: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeSolutionVersion",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeSolutionVersionInput
  },
  output: {
    shape: DescribeSolutionVersionOutput
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
