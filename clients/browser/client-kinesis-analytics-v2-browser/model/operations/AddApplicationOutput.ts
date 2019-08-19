import { AddApplicationOutputInput } from "../shapes/AddApplicationOutputInput";
import { AddApplicationOutputOutput } from "../shapes/AddApplicationOutputOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { ResourceInUseException } from "../shapes/ResourceInUseException";
import { InvalidArgumentException } from "../shapes/InvalidArgumentException";
import { ConcurrentModificationException } from "../shapes/ConcurrentModificationException";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const AddApplicationOutput: _Operation_ = {
  metadata: ServiceMetadata,
  name: "AddApplicationOutput",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: AddApplicationOutputInput
  },
  output: {
    shape: AddApplicationOutputOutput
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
