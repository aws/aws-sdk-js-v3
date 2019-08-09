import { UpdateWorkflowInput } from "./UpdateWorkflowInput";
import { UpdateWorkflowOutput } from "./UpdateWorkflowOutput";
import { InvalidInputException } from "./InvalidInputException";
import { EntityNotFoundException } from "./EntityNotFoundException";
import { InternalServiceException } from "./InternalServiceException";
import { OperationTimeoutException } from "./OperationTimeoutException";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const UpdateWorkflow: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateWorkflow",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UpdateWorkflowInput
  },
  output: {
    shape: UpdateWorkflowOutput
  },
  errors: [
    {
      shape: InvalidInputException
    },
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
      shape: ConcurrentModificationException
    }
  ]
};
