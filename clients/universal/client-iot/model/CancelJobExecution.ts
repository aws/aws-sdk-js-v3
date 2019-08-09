import { CancelJobExecutionInput } from "./CancelJobExecutionInput";
import { CancelJobExecutionOutput } from "./CancelJobExecutionOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { InvalidStateTransitionException } from "./InvalidStateTransitionException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ThrottlingException } from "./ThrottlingException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { VersionConflictException } from "./VersionConflictException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const CancelJobExecution: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CancelJobExecution",
  http: {
    method: "PUT",
    requestUri: "/things/{thingName}/jobs/{jobId}/cancel"
  },
  input: {
    shape: CancelJobExecutionInput
  },
  output: {
    shape: CancelJobExecutionOutput
  },
  errors: [
    {
      shape: InvalidRequestException
    },
    {
      shape: InvalidStateTransitionException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: ThrottlingException
    },
    {
      shape: ServiceUnavailableException
    },
    {
      shape: VersionConflictException
    }
  ]
};
