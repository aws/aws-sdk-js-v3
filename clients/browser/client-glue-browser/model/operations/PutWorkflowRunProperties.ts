import { PutWorkflowRunPropertiesInput } from "../shapes/PutWorkflowRunPropertiesInput";
import { PutWorkflowRunPropertiesOutput } from "../shapes/PutWorkflowRunPropertiesOutput";
import { AlreadyExistsException } from "../shapes/AlreadyExistsException";
import { EntityNotFoundException } from "../shapes/EntityNotFoundException";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { InternalServiceException } from "../shapes/InternalServiceException";
import { OperationTimeoutException } from "../shapes/OperationTimeoutException";
import { ResourceNumberLimitExceededException } from "../shapes/ResourceNumberLimitExceededException";
import { ConcurrentModificationException } from "../shapes/ConcurrentModificationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
