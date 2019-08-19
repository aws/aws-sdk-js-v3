import { UpdateProfileInput } from "../shapes/UpdateProfileInput";
import { UpdateProfileOutput } from "../shapes/UpdateProfileOutput";
import { NotFoundException } from "../shapes/NotFoundException";
import { NameInUseException } from "../shapes/NameInUseException";
import { ConcurrentModificationException } from "../shapes/ConcurrentModificationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateProfile: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateProfile",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UpdateProfileInput
  },
  output: {
    shape: UpdateProfileOutput
  },
  errors: [
    {
      shape: NotFoundException
    },
    {
      shape: NameInUseException
    },
    {
      shape: ConcurrentModificationException
    }
  ]
};
