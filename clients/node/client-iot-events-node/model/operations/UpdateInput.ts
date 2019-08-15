import { UpdateInputInput } from "../shapes/UpdateInputInput";
import { UpdateInputOutput } from "../shapes/UpdateInputOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { ResourceInUseException } from "../shapes/ResourceInUseException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
