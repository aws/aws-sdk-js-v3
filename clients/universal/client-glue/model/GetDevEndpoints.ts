import { GetDevEndpointsInput } from "./GetDevEndpointsInput";
import { GetDevEndpointsOutput } from "./GetDevEndpointsOutput";
import { EntityNotFoundException } from "./EntityNotFoundException";
import { InternalServiceException } from "./InternalServiceException";
import { OperationTimeoutException } from "./OperationTimeoutException";
import { InvalidInputException } from "./InvalidInputException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetDevEndpoints: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetDevEndpoints",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetDevEndpointsInput
  },
  output: {
    shape: GetDevEndpointsOutput
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
