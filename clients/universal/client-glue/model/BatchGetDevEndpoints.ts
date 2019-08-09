import { BatchGetDevEndpointsInput } from "./BatchGetDevEndpointsInput";
import { BatchGetDevEndpointsOutput } from "./BatchGetDevEndpointsOutput";
import { AccessDeniedException } from "./AccessDeniedException";
import { InternalServiceException } from "./InternalServiceException";
import { OperationTimeoutException } from "./OperationTimeoutException";
import { InvalidInputException } from "./InvalidInputException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
