import { DeleteServiceActionInput } from "./DeleteServiceActionInput";
import { DeleteServiceActionOutput } from "./DeleteServiceActionOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ResourceInUseException } from "./ResourceInUseException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DeleteServiceAction: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteServiceAction",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteServiceActionInput
  },
  output: {
    shape: DeleteServiceActionOutput
  },
  errors: [
    {
      shape: ResourceNotFoundException
    },
    {
      shape: ResourceInUseException
    }
  ]
};
