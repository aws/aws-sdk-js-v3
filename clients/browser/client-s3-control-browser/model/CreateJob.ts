import { CreateJobInput } from "./CreateJobInput";
import { CreateJobOutput } from "./CreateJobOutput";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { BadRequestException } from "./BadRequestException";
import { IdempotencyException } from "./IdempotencyException";
import { InternalServiceException } from "./InternalServiceException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const CreateJob: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateJob",
  http: {
    method: "POST",
    requestUri: "/v20180820/jobs"
  },
  input: {
    shape: CreateJobInput,
    locationName: "CreateJobRequest",
    xmlNamespace: {
      uri: "http://awss3control.amazonaws.com/doc/2018-08-20/"
    }
  },
  output: {
    shape: CreateJobOutput
  },
  errors: [
    {
      shape: TooManyRequestsException
    },
    {
      shape: BadRequestException
    },
    {
      shape: IdempotencyException
    },
    {
      shape: InternalServiceException
    }
  ]
};
