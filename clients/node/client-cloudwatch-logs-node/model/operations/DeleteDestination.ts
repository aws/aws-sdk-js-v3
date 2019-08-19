import { DeleteDestinationInput } from "../shapes/DeleteDestinationInput";
import { DeleteDestinationOutput } from "../shapes/DeleteDestinationOutput";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationAbortedException } from "../shapes/OperationAbortedException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
