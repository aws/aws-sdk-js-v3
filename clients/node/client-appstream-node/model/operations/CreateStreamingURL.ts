import { CreateStreamingURLInput } from "../shapes/CreateStreamingURLInput";
import { CreateStreamingURLOutput } from "../shapes/CreateStreamingURLOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { ResourceNotAvailableException } from "../shapes/ResourceNotAvailableException";
import { OperationNotPermittedException } from "../shapes/OperationNotPermittedException";
import { InvalidParameterCombinationException } from "../shapes/InvalidParameterCombinationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateStreamingURL: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateStreamingURL",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateStreamingURLInput
  },
  output: {
    shape: CreateStreamingURLOutput
  },
  errors: [
    {
      shape: ResourceNotFoundException
    },
    {
      shape: ResourceNotAvailableException
    },
    {
      shape: OperationNotPermittedException
    },
    {
      shape: InvalidParameterCombinationException
    }
  ]
};
