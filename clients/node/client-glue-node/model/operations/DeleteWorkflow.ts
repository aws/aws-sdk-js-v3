import { DeleteWorkflowInput } from "../shapes/DeleteWorkflowInput";
import { DeleteWorkflowOutput } from "../shapes/DeleteWorkflowOutput";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { InternalServiceException } from "../shapes/InternalServiceException";
import { OperationTimeoutException } from "../shapes/OperationTimeoutException";
import { ConcurrentModificationException } from "../shapes/ConcurrentModificationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
