import { DeleteProfileInput } from "../shapes/DeleteProfileInput";
import { DeleteProfileOutput } from "../shapes/DeleteProfileOutput";
import { NotFoundException } from "../shapes/NotFoundException";
import { ConcurrentModificationException } from "../shapes/ConcurrentModificationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteProfile: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteProfile",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteProfileInput
  },
  output: {
    shape: DeleteProfileOutput
  },
  errors: [
    {
      shape: NotFoundException
    },
    {
      shape: ConcurrentModificationException
    }
  ]
};
