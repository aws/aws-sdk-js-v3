import { CancelJobExecutionInput } from "../shapes/CancelJobExecutionInput";
import { CancelJobExecutionOutput } from "../shapes/CancelJobExecutionOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { InvalidStateTransitionException } from "../shapes/InvalidStateTransitionException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { VersionConflictException } from "../shapes/VersionConflictException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
