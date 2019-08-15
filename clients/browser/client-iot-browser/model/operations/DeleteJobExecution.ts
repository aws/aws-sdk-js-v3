import { DeleteJobExecutionInput } from "../shapes/DeleteJobExecutionInput";
import { DeleteJobExecutionOutput } from "../shapes/DeleteJobExecutionOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { InvalidStateTransitionException } from "../shapes/InvalidStateTransitionException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
