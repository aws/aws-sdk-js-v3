import { UpdateJobPriorityInput } from "./UpdateJobPriorityInput";
import { UpdateJobPriorityOutput } from "./UpdateJobPriorityOutput";
import { BadRequestException } from "./BadRequestException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { NotFoundException } from "./NotFoundException";
import { InternalServiceException } from "./InternalServiceException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
