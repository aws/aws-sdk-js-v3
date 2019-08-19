import { StartWorkflowRunInput } from "../shapes/StartWorkflowRunInput";
import { StartWorkflowRunOutput } from "../shapes/StartWorkflowRunOutput";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { EntityNotFoundException } from "../shapes/EntityNotFoundException";
import { InternalServiceException } from "../shapes/InternalServiceException";
import { OperationTimeoutException } from "../shapes/OperationTimeoutException";
import { ResourceNumberLimitExceededException } from "../shapes/ResourceNumberLimitExceededException";
import { ConcurrentRunsExceededException } from "../shapes/ConcurrentRunsExceededException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const StartWorkflowRun: _Operation_ = {
  metadata: ServiceMetadata,
  name: "StartWorkflowRun",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: StartWorkflowRunInput
  },
  output: {
    shape: StartWorkflowRunOutput
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
      shape: ResourceNumberLimitExceededException
    },
    {
      shape: ConcurrentRunsExceededException
    }
  ]
};
