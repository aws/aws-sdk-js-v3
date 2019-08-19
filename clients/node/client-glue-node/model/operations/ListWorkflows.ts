import { ListWorkflowsInput } from "../shapes/ListWorkflowsInput";
import { ListWorkflowsOutput } from "../shapes/ListWorkflowsOutput";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { InternalServiceException } from "../shapes/InternalServiceException";
import { OperationTimeoutException } from "../shapes/OperationTimeoutException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListWorkflows: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListWorkflows",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListWorkflowsInput
  },
  output: {
    shape: ListWorkflowsOutput
  },
  errors: [
    {
      shape: InvalidInputException
    },
    {
      shape: InternalServiceException
    },
    {
      shape: OperationTimeoutException
    }
  ]
};
