import { GetDevEndpointsInput } from "../shapes/GetDevEndpointsInput";
import { GetDevEndpointsOutput } from "../shapes/GetDevEndpointsOutput";
import { EntityNotFoundException } from "../shapes/EntityNotFoundException";
import { InternalServiceException } from "../shapes/InternalServiceException";
import { OperationTimeoutException } from "../shapes/OperationTimeoutException";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
