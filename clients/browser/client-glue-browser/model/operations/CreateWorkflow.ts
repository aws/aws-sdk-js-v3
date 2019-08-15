import { CreateWorkflowInput } from "../shapes/CreateWorkflowInput";
import { CreateWorkflowOutput } from "../shapes/CreateWorkflowOutput";
import { AlreadyExistsException } from "../shapes/AlreadyExistsException";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { InternalServiceException } from "../shapes/InternalServiceException";
import { OperationTimeoutException } from "../shapes/OperationTimeoutException";
import { ResourceNumberLimitExceededException } from "../shapes/ResourceNumberLimitExceededException";
import { ConcurrentModificationException } from "../shapes/ConcurrentModificationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
