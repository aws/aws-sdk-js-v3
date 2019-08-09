import { UpdateProfileInput } from "./UpdateProfileInput";
import { UpdateProfileOutput } from "./UpdateProfileOutput";
import { NotFoundException } from "./NotFoundException";
import { NameInUseException } from "./NameInUseException";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
