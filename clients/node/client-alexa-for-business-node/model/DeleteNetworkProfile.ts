import { DeleteNetworkProfileInput } from "./DeleteNetworkProfileInput";
import { DeleteNetworkProfileOutput } from "./DeleteNetworkProfileOutput";
import { ResourceInUseException } from "./ResourceInUseException";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
import { NotFoundException } from "./NotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DeleteNetworkProfile: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteNetworkProfile",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteNetworkProfileInput
  },
  output: {
    shape: DeleteNetworkProfileOutput
  },
  errors: [
    {
      shape: ResourceInUseException
    },
    {
      shape: ConcurrentModificationException
    },
    {
      shape: NotFoundException
    }
  ]
};
