import { DescribeProblemObservationsInput } from "./DescribeProblemObservationsInput";
import { DescribeProblemObservationsOutput } from "./DescribeProblemObservationsOutput";
import { InternalServerException } from "./InternalServerException";
import { ValidationException } from "./ValidationException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DescribeProblemObservations: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeProblemObservations",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeProblemObservationsInput
  },
  output: {
    shape: DescribeProblemObservationsOutput
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
