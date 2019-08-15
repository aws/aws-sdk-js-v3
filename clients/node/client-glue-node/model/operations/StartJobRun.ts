import { StartJobRunInput } from "../shapes/StartJobRunInput";
import { StartJobRunOutput } from "../shapes/StartJobRunOutput";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { EntityNotFoundException } from "../shapes/EntityNotFoundException";
import { InternalServiceException } from "../shapes/InternalServiceException";
import { OperationTimeoutException } from "../shapes/OperationTimeoutException";
import { ResourceNumberLimitExceededException } from "../shapes/ResourceNumberLimitExceededException";
import { ConcurrentRunsExceededException } from "../shapes/ConcurrentRunsExceededException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
