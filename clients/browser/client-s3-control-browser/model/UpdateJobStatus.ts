import { UpdateJobStatusInput } from "./UpdateJobStatusInput";
import { UpdateJobStatusOutput } from "./UpdateJobStatusOutput";
import { BadRequestException } from "./BadRequestException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { NotFoundException } from "./NotFoundException";
import { JobStatusException } from "./JobStatusException";
import { InternalServiceException } from "./InternalServiceException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
