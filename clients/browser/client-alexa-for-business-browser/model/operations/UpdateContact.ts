import { UpdateContactInput } from "../shapes/UpdateContactInput";
import { UpdateContactOutput } from "../shapes/UpdateContactOutput";
import { NotFoundException } from "../shapes/NotFoundException";
import { ConcurrentModificationException } from "../shapes/ConcurrentModificationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateContact: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateContact",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UpdateContactInput
  },
  output: {
    shape: UpdateContactOutput
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
