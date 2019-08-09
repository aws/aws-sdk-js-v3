import { DeleteDevEndpointInput } from "./DeleteDevEndpointInput";
import { DeleteDevEndpointOutput } from "./DeleteDevEndpointOutput";
import { EntityNotFoundException } from "./EntityNotFoundException";
import { InternalServiceException } from "./InternalServiceException";
import { OperationTimeoutException } from "./OperationTimeoutException";
import { InvalidInputException } from "./InvalidInputException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
