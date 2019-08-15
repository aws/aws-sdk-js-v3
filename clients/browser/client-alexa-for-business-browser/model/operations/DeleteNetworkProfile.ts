import { DeleteNetworkProfileInput } from "../shapes/DeleteNetworkProfileInput";
import { DeleteNetworkProfileOutput } from "../shapes/DeleteNetworkProfileOutput";
import { ResourceInUseException } from "../shapes/ResourceInUseException";
import { ConcurrentModificationException } from "../shapes/ConcurrentModificationException";
import { NotFoundException } from "../shapes/NotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
