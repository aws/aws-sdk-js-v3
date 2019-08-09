import { ActivateEventSourceInput } from "./ActivateEventSourceInput";
import { ActivateEventSourceOutput } from "./ActivateEventSourceOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidStateException } from "./InvalidStateException";
import { InternalException } from "./InternalException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
