import { DeleteInputInput } from "../shapes/DeleteInputInput";
import { DeleteInputOutput } from "../shapes/DeleteInputOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { ResourceInUseException } from "../shapes/ResourceInUseException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
