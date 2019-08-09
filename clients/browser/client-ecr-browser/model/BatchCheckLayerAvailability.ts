import { BatchCheckLayerAvailabilityInput } from "./BatchCheckLayerAvailabilityInput";
import { BatchCheckLayerAvailabilityOutput } from "./BatchCheckLayerAvailabilityOutput";
import { RepositoryNotFoundException } from "./RepositoryNotFoundException";
import { InvalidParameterException } from "./InvalidParameterException";
import { ServerException } from "./ServerException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
