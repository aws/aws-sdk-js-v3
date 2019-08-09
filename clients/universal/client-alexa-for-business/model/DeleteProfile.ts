import { DeleteProfileInput } from "./DeleteProfileInput";
import { DeleteProfileOutput } from "./DeleteProfileOutput";
import { NotFoundException } from "./NotFoundException";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
