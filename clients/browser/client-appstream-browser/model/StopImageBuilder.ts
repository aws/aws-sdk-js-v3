import { StopImageBuilderInput } from "./StopImageBuilderInput";
import { StopImageBuilderOutput } from "./StopImageBuilderOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { OperationNotPermittedException } from "./OperationNotPermittedException";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
