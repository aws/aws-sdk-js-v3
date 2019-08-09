import { PutWorkflowRunPropertiesInput } from "./PutWorkflowRunPropertiesInput";
import { PutWorkflowRunPropertiesOutput } from "./PutWorkflowRunPropertiesOutput";
import { AlreadyExistsException } from "./AlreadyExistsException";
import { EntityNotFoundException } from "./EntityNotFoundException";
import { InvalidInputException } from "./InvalidInputException";
import { InternalServiceException } from "./InternalServiceException";
import { OperationTimeoutException } from "./OperationTimeoutException";
import { ResourceNumberLimitExceededException } from "./ResourceNumberLimitExceededException";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const PutWorkflowRunProperties: _Operation_ = {
  metadata: ServiceMetadata,
  name: "PutWorkflowRunProperties",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: PutWorkflowRunPropertiesInput
  },
  output: {
    shape: PutWorkflowRunPropertiesOutput
  },
  errors: [
    {
      shape: AlreadyExistsException
    },
    {
      shape: EntityNotFoundException
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
