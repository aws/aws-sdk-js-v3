import { DeleteDestinationInput } from "./DeleteDestinationInput";
import { DeleteDestinationOutput } from "./DeleteDestinationOutput";
import { InvalidParameterException } from "./InvalidParameterException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { OperationAbortedException } from "./OperationAbortedException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DeleteDestination: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteDestination",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteDestinationInput
  },
  output: {
    shape: DeleteDestinationOutput
  },
  errors: [
    {
      shape: InvalidParameterException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: OperationAbortedException
    },
    {
      shape: ServiceUnavailableException
    }
  ]
};
