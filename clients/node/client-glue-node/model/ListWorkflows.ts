import { ListWorkflowsInput } from "./ListWorkflowsInput";
import { ListWorkflowsOutput } from "./ListWorkflowsOutput";
import { InvalidInputException } from "./InvalidInputException";
import { InternalServiceException } from "./InternalServiceException";
import { OperationTimeoutException } from "./OperationTimeoutException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
