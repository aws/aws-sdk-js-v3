import { DeleteContactInput } from "../shapes/DeleteContactInput";
import { DeleteContactOutput } from "../shapes/DeleteContactOutput";
import { NotFoundException } from "../shapes/NotFoundException";
import { ConcurrentModificationException } from "../shapes/ConcurrentModificationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteContact: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteContact",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteContactInput
  },
  output: {
    shape: DeleteContactOutput
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
