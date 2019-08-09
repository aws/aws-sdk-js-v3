import { DeleteTerminologyInput } from "./DeleteTerminologyInput";
import { DeleteTerminologyOutput } from "./DeleteTerminologyOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { InternalServerException } from "./InternalServerException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
