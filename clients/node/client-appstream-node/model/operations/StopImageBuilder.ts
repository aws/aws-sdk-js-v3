import { StopImageBuilderInput } from "../shapes/StopImageBuilderInput";
import { StopImageBuilderOutput } from "../shapes/StopImageBuilderOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationNotPermittedException } from "../shapes/OperationNotPermittedException";
import { ConcurrentModificationException } from "../shapes/ConcurrentModificationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const StopImageBuilder: _Operation_ = {
  metadata: ServiceMetadata,
  name: "StopImageBuilder",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: StopImageBuilderInput
  },
  output: {
    shape: StopImageBuilderOutput
  },
  errors: [
    {
      shape: ResourceNotFoundException
    },
    {
      shape: OperationNotPermittedException
    },
    {
      shape: ConcurrentModificationException
    }
  ]
};
