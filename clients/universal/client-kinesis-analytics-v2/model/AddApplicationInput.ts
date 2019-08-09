import { AddApplicationInputInput } from "./AddApplicationInputInput";
import { AddApplicationInputOutput } from "./AddApplicationInputOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ResourceInUseException } from "./ResourceInUseException";
import { InvalidArgumentException } from "./InvalidArgumentException";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
import { CodeValidationException } from "./CodeValidationException";
import { InvalidRequestException } from "./InvalidRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
