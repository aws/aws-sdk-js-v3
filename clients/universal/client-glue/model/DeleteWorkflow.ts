import { DeleteWorkflowInput } from "./DeleteWorkflowInput";
import { DeleteWorkflowOutput } from "./DeleteWorkflowOutput";
import { InvalidInputException } from "./InvalidInputException";
import { InternalServiceException } from "./InternalServiceException";
import { OperationTimeoutException } from "./OperationTimeoutException";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DeleteWorkflow: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteWorkflow",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteWorkflowInput
  },
  output: {
    shape: DeleteWorkflowOutput
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
    },
    {
      shape: ConcurrentModificationException
    }
  ]
};
