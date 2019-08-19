import { BatchGetWorkflowsInput } from "../shapes/BatchGetWorkflowsInput";
import { BatchGetWorkflowsOutput } from "../shapes/BatchGetWorkflowsOutput";
import { InternalServiceException } from "../shapes/InternalServiceException";
import { OperationTimeoutException } from "../shapes/OperationTimeoutException";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
