import { DeleteListenerInput } from "./DeleteListenerInput";
import { DeleteListenerOutput } from "./DeleteListenerOutput";
import { ListenerNotFoundException } from "./ListenerNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DeleteListener: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteListener",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteListenerInput
  },
  output: {
    shape: DeleteListenerOutput,
    resultWrapper: "DeleteListenerResult"
  },
  errors: [
    {
      shape: ListenerNotFoundException
    }
  ]
};
