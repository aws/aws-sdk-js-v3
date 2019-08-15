import { ActivateEventSourceInput } from "../shapes/ActivateEventSourceInput";
import { ActivateEventSourceOutput } from "../shapes/ActivateEventSourceOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidStateException } from "../shapes/InvalidStateException";
import { InternalException } from "../shapes/InternalException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ActivateEventSource: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ActivateEventSource",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ActivateEventSourceInput
  },
  output: {
    shape: ActivateEventSourceOutput
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
