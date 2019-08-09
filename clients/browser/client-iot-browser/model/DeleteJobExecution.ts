import { DeleteJobExecutionInput } from "./DeleteJobExecutionInput";
import { DeleteJobExecutionOutput } from "./DeleteJobExecutionOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { InvalidStateTransitionException } from "./InvalidStateTransitionException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ThrottlingException } from "./ThrottlingException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DeleteJobExecution: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteJobExecution",
  http: {
    method: "DELETE",
    requestUri:
      "/things/{thingName}/jobs/{jobId}/executionNumber/{executionNumber}"
  },
  input: {
    shape: DeleteJobExecutionInput
  },
  output: {
    shape: DeleteJobExecutionOutput
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
    }
  ]
};
