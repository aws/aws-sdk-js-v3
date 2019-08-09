import { StartWorkflowRunInput } from "./StartWorkflowRunInput";
import { StartWorkflowRunOutput } from "./StartWorkflowRunOutput";
import { InvalidInputException } from "./InvalidInputException";
import { EntityNotFoundException } from "./EntityNotFoundException";
import { InternalServiceException } from "./InternalServiceException";
import { OperationTimeoutException } from "./OperationTimeoutException";
import { ResourceNumberLimitExceededException } from "./ResourceNumberLimitExceededException";
import { ConcurrentRunsExceededException } from "./ConcurrentRunsExceededException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
