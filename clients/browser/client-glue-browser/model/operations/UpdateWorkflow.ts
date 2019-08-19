import { UpdateWorkflowInput } from "../shapes/UpdateWorkflowInput";
import { UpdateWorkflowOutput } from "../shapes/UpdateWorkflowOutput";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { EntityNotFoundException } from "../shapes/EntityNotFoundException";
import { InternalServiceException } from "../shapes/InternalServiceException";
import { OperationTimeoutException } from "../shapes/OperationTimeoutException";
import { ConcurrentModificationException } from "../shapes/ConcurrentModificationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
