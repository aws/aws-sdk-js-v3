import { GetDevEndpointInput } from "./GetDevEndpointInput";
import { GetDevEndpointOutput } from "./GetDevEndpointOutput";
import { EntityNotFoundException } from "./EntityNotFoundException";
import { InternalServiceException } from "./InternalServiceException";
import { OperationTimeoutException } from "./OperationTimeoutException";
import { InvalidInputException } from "./InvalidInputException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetDevEndpoint: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetDevEndpoint",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetDevEndpointInput
  },
  output: {
    shape: GetDevEndpointOutput
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
