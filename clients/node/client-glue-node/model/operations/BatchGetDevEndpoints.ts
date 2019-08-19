import { BatchGetDevEndpointsInput } from "../shapes/BatchGetDevEndpointsInput";
import { BatchGetDevEndpointsOutput } from "../shapes/BatchGetDevEndpointsOutput";
import { AccessDeniedException } from "../shapes/AccessDeniedException";
import { InternalServiceException } from "../shapes/InternalServiceException";
import { OperationTimeoutException } from "../shapes/OperationTimeoutException";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const BatchGetDevEndpoints: _Operation_ = {
  metadata: ServiceMetadata,
  name: "BatchGetDevEndpoints",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: BatchGetDevEndpointsInput
  },
  output: {
    shape: BatchGetDevEndpointsOutput
  },
  errors: [
    {
      shape: AccessDeniedException
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
