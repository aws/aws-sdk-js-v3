import { UpdateJobStatusInput } from "../shapes/UpdateJobStatusInput";
import { UpdateJobStatusOutput } from "../shapes/UpdateJobStatusOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { NotFoundException } from "../shapes/NotFoundException";
import { JobStatusException } from "../shapes/JobStatusException";
import { InternalServiceException } from "../shapes/InternalServiceException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateJobStatus: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateJobStatus",
  http: {
    method: "POST",
    requestUri: "/v20180820/jobs/{id}/status"
  },
  input: {
    shape: UpdateJobStatusInput
  },
  output: {
    shape: UpdateJobStatusOutput
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
      shape: JobStatusException
    },
    {
      shape: InternalServiceException
    }
  ]
};
