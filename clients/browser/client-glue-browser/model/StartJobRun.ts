import { StartJobRunInput } from "./StartJobRunInput";
import { StartJobRunOutput } from "./StartJobRunOutput";
import { InvalidInputException } from "./InvalidInputException";
import { EntityNotFoundException } from "./EntityNotFoundException";
import { InternalServiceException } from "./InternalServiceException";
import { OperationTimeoutException } from "./OperationTimeoutException";
import { ResourceNumberLimitExceededException } from "./ResourceNumberLimitExceededException";
import { ConcurrentRunsExceededException } from "./ConcurrentRunsExceededException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const StartJobRun: _Operation_ = {
  metadata: ServiceMetadata,
  name: "StartJobRun",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: StartJobRunInput
  },
  output: {
    shape: StartJobRunOutput
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
