import { BatchCheckLayerAvailabilityInput } from "../shapes/BatchCheckLayerAvailabilityInput";
import { BatchCheckLayerAvailabilityOutput } from "../shapes/BatchCheckLayerAvailabilityOutput";
import { RepositoryNotFoundException } from "../shapes/RepositoryNotFoundException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { ServerException } from "../shapes/ServerException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const BatchCheckLayerAvailability: _Operation_ = {
  metadata: ServiceMetadata,
  name: "BatchCheckLayerAvailability",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: BatchCheckLayerAvailabilityInput
  },
  output: {
    shape: BatchCheckLayerAvailabilityOutput
  },
  errors: [
    {
      shape: RepositoryNotFoundException
    },
    {
      shape: InvalidParameterException
    },
    {
      shape: ServerException
    }
  ]
};
