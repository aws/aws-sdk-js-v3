import { StartImageBuilderInput } from "./StartImageBuilderInput";
import { StartImageBuilderOutput } from "./StartImageBuilderOutput";
import { ResourceNotAvailableException } from "./ResourceNotAvailableException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
import { InvalidAccountStatusException } from "./InvalidAccountStatusException";
import { IncompatibleImageException } from "./IncompatibleImageException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const StartImageBuilder: _Operation_ = {
  metadata: ServiceMetadata,
  name: "StartImageBuilder",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: StartImageBuilderInput
  },
  output: {
    shape: StartImageBuilderOutput
  },
  errors: [
    {
      shape: ResourceNotAvailableException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: ConcurrentModificationException
    },
    {
      shape: InvalidAccountStatusException
    },
    {
      shape: IncompatibleImageException
    }
  ]
};
