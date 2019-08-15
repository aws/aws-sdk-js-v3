import { DeleteTerminologyInput } from "../shapes/DeleteTerminologyInput";
import { DeleteTerminologyOutput } from "../shapes/DeleteTerminologyOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { InternalServerException } from "../shapes/InternalServerException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteTerminology: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteTerminology",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteTerminologyInput
  },
  output: {
    shape: DeleteTerminologyOutput
  },
  errors: [
    {
      shape: ResourceNotFoundException
    },
    {
      shape: TooManyRequestsException
    },
    {
      shape: InternalServerException
    }
  ]
};
