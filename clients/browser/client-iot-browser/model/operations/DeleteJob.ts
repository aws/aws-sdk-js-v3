import { DeleteJobInput } from "../shapes/DeleteJobInput";
import { DeleteJobOutput } from "../shapes/DeleteJobOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { InvalidStateTransitionException } from "../shapes/InvalidStateTransitionException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
