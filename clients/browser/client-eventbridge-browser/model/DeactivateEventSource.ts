import { DeactivateEventSourceInput } from "./DeactivateEventSourceInput";
import { DeactivateEventSourceOutput } from "./DeactivateEventSourceOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidStateException } from "./InvalidStateException";
import { InternalException } from "./InternalException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
