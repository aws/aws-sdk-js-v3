import { AddApplicationOutputInput } from "./AddApplicationOutputInput";
import { AddApplicationOutputOutput } from "./AddApplicationOutputOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ResourceInUseException } from "./ResourceInUseException";
import { InvalidArgumentException } from "./InvalidArgumentException";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
import { InvalidRequestException } from "./InvalidRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
