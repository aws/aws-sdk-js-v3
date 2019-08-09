import { DeleteContactInput } from "./DeleteContactInput";
import { DeleteContactOutput } from "./DeleteContactOutput";
import { NotFoundException } from "./NotFoundException";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
