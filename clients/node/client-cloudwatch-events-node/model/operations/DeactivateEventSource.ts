import { DeactivateEventSourceInput } from "../shapes/DeactivateEventSourceInput";
import { DeactivateEventSourceOutput } from "../shapes/DeactivateEventSourceOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidStateException } from "../shapes/InvalidStateException";
import { InternalException } from "../shapes/InternalException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeactivateEventSource: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeactivateEventSource",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeactivateEventSourceInput
  },
  output: {
    shape: DeactivateEventSourceOutput
  },
  errors: [
    {
      shape: ResourceNotFoundException
    },
    {
      shape: InvalidStateException
    },
    {
      shape: InternalException
    }
  ]
};
