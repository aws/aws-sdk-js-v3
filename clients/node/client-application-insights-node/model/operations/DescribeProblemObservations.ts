import { DescribeProblemObservationsInput } from "../shapes/DescribeProblemObservationsInput";
import { DescribeProblemObservationsOutput } from "../shapes/DescribeProblemObservationsOutput";
import { InternalServerException } from "../shapes/InternalServerException";
import { ValidationException } from "../shapes/ValidationException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
