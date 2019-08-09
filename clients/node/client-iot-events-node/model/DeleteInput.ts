import { DeleteInputInput } from "./DeleteInputInput";
import { DeleteInputOutput } from "./DeleteInputOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ThrottlingException } from "./ThrottlingException";
import { InternalFailureException } from "./InternalFailureException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { ResourceInUseException } from "./ResourceInUseException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DeleteInput: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteInput",
  http: {
    method: "DELETE",
    requestUri: "/inputs/{inputName}"
  },
  input: {
    shape: DeleteInputInput
  },
  output: {
    shape: DeleteInputOutput
  },
  errors: [
    {
      shape: InvalidRequestException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: ThrottlingException
    },
    {
      shape: InternalFailureException
    },
    {
      shape: ServiceUnavailableException
    },
    {
      shape: ResourceInUseException
    }
  ]
};
