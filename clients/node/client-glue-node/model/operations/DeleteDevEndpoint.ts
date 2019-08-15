import { DeleteDevEndpointInput } from "../shapes/DeleteDevEndpointInput";
import { DeleteDevEndpointOutput } from "../shapes/DeleteDevEndpointOutput";
import { EntityNotFoundException } from "../shapes/EntityNotFoundException";
import { InternalServiceException } from "../shapes/InternalServiceException";
import { OperationTimeoutException } from "../shapes/OperationTimeoutException";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteDevEndpoint: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteDevEndpoint",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteDevEndpointInput
  },
  output: {
    shape: DeleteDevEndpointOutput
  },
  errors: [
    {
      shape: EntityNotFoundException
    },
    {
      shape: InternalServiceException
    },
    {
      shape: OperationTimeoutException
    },
    {
      shape: InvalidInputException
    }
  ]
};
