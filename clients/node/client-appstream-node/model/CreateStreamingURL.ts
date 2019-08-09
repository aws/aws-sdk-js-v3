import { CreateStreamingURLInput } from "./CreateStreamingURLInput";
import { CreateStreamingURLOutput } from "./CreateStreamingURLOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ResourceNotAvailableException } from "./ResourceNotAvailableException";
import { OperationNotPermittedException } from "./OperationNotPermittedException";
import { InvalidParameterCombinationException } from "./InvalidParameterCombinationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
