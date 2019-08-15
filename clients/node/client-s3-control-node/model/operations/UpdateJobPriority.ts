import { UpdateJobPriorityInput } from "../shapes/UpdateJobPriorityInput";
import { UpdateJobPriorityOutput } from "../shapes/UpdateJobPriorityOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { NotFoundException } from "../shapes/NotFoundException";
import { InternalServiceException } from "../shapes/InternalServiceException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateJobPriority: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateJobPriority",
  http: {
    method: "POST",
    requestUri: "/v20180820/jobs/{id}/priority"
  },
  input: {
    shape: UpdateJobPriorityInput
  },
  output: {
    shape: UpdateJobPriorityOutput
  },
  errors: [
    {
      shape: BadRequestException
    },
    {
      shape: TooManyRequestsException
    },
    {
      shape: NotFoundException
    },
    {
      shape: InternalServiceException
    }
  ]
};
