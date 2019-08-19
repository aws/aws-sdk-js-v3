import { DeleteApplicationOutputInput } from "../shapes/DeleteApplicationOutputInput";
import { DeleteApplicationOutputOutput } from "../shapes/DeleteApplicationOutputOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { ResourceInUseException } from "../shapes/ResourceInUseException";
import { InvalidArgumentException } from "../shapes/InvalidArgumentException";
import { ConcurrentModificationException } from "../shapes/ConcurrentModificationException";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteApplicationOutput: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteApplicationOutput",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteApplicationOutputInput
  },
  output: {
    shape: DeleteApplicationOutputOutput
  },
  errors: [
    {
      shape: ResourceNotFoundException
    },
    {
      shape: ResourceInUseException
    },
    {
      shape: InvalidArgumentException
    },
    {
      shape: ConcurrentModificationException
    },
    {
      shape: InvalidRequestException
    }
  ]
};
