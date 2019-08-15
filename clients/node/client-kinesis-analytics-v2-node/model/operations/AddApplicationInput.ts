import { AddApplicationInputInput } from "../shapes/AddApplicationInputInput";
import { AddApplicationInputOutput } from "../shapes/AddApplicationInputOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { ResourceInUseException } from "../shapes/ResourceInUseException";
import { InvalidArgumentException } from "../shapes/InvalidArgumentException";
import { ConcurrentModificationException } from "../shapes/ConcurrentModificationException";
import { CodeValidationException } from "../shapes/CodeValidationException";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const AddApplicationInput: _Operation_ = {
  metadata: ServiceMetadata,
  name: "AddApplicationInput",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: AddApplicationInputInput
  },
  output: {
    shape: AddApplicationInputOutput
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
      shape: CodeValidationException
    },
    {
      shape: InvalidRequestException
    }
  ]
};
