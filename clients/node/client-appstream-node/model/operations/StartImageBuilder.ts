import { StartImageBuilderInput } from "../shapes/StartImageBuilderInput";
import { StartImageBuilderOutput } from "../shapes/StartImageBuilderOutput";
import { ResourceNotAvailableException } from "../shapes/ResourceNotAvailableException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { ConcurrentModificationException } from "../shapes/ConcurrentModificationException";
import { InvalidAccountStatusException } from "../shapes/InvalidAccountStatusException";
import { IncompatibleImageException } from "../shapes/IncompatibleImageException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
