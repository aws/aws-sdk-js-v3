import { BatchGetWorkflowsInput } from "./BatchGetWorkflowsInput";
import { BatchGetWorkflowsOutput } from "./BatchGetWorkflowsOutput";
import { InternalServiceException } from "./InternalServiceException";
import { OperationTimeoutException } from "./OperationTimeoutException";
import { InvalidInputException } from "./InvalidInputException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const BatchGetWorkflows: _Operation_ = {
  metadata: ServiceMetadata,
  name: "BatchGetWorkflows",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: BatchGetWorkflowsInput
  },
  output: {
    shape: BatchGetWorkflowsOutput
  },
  errors: [
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
