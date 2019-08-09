import { UpdateInputInput } from "./UpdateInputInput";
import { UpdateInputOutput } from "./UpdateInputOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { ThrottlingException } from "./ThrottlingException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InternalFailureException } from "./InternalFailureException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { ResourceInUseException } from "./ResourceInUseException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const UpdateInput: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateInput",
  http: {
    method: "PUT",
    requestUri: "/inputs/{inputName}"
  },
  input: {
    shape: UpdateInputInput
  },
  output: {
    shape: UpdateInputOutput
  },
  errors: [
    {
      shape: InvalidRequestException
    },
    {
      shape: ThrottlingException
    },
    {
      shape: ResourceNotFoundException
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
