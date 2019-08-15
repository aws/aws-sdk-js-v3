import { GetDevEndpointInput } from "../shapes/GetDevEndpointInput";
import { GetDevEndpointOutput } from "../shapes/GetDevEndpointOutput";
import { EntityNotFoundException } from "../shapes/EntityNotFoundException";
import { InternalServiceException } from "../shapes/InternalServiceException";
import { OperationTimeoutException } from "../shapes/OperationTimeoutException";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
