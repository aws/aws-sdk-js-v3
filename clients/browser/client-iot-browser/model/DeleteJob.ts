import { DeleteJobInput } from "./DeleteJobInput";
import { DeleteJobOutput } from "./DeleteJobOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { InvalidStateTransitionException } from "./InvalidStateTransitionException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { LimitExceededException } from "./LimitExceededException";
import { ThrottlingException } from "./ThrottlingException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DeleteJob: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteJob",
  http: {
    method: "DELETE",
    requestUri: "/jobs/{jobId}"
  },
  input: {
    shape: DeleteJobInput
  },
  output: {
    shape: DeleteJobOutput
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
      shape: LimitExceededException
    },
    {
      shape: ThrottlingException
    },
    {
      shape: ServiceUnavailableException
    }
  ]
};
