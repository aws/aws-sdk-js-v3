import { DeleteEventBusInput } from "./DeleteEventBusInput";
import { DeleteEventBusOutput } from "./DeleteEventBusOutput";
import { InternalException } from "./InternalException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DeleteEventBus: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteEventBus",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteEventBusInput
  },
  output: {
    shape: DeleteEventBusOutput
  },
  errors: [
    {
      shape: InternalException
    }
  ]
};
