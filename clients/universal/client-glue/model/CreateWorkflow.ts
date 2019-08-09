import { CreateWorkflowInput } from "./CreateWorkflowInput";
import { CreateWorkflowOutput } from "./CreateWorkflowOutput";
import { AlreadyExistsException } from "./AlreadyExistsException";
import { InvalidInputException } from "./InvalidInputException";
import { InternalServiceException } from "./InternalServiceException";
import { OperationTimeoutException } from "./OperationTimeoutException";
import { ResourceNumberLimitExceededException } from "./ResourceNumberLimitExceededException";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const CreateWorkflow: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateWorkflow",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateWorkflowInput
  },
  output: {
    shape: CreateWorkflowOutput
  },
  errors: [
    {
      shape: AlreadyExistsException
    },
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
      shape: ResourceNumberLimitExceededException
    },
    {
      shape: ConcurrentModificationException
    }
  ]
};
