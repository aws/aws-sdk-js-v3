import { CreateJobInput } from "../shapes/CreateJobInput";
import { CreateJobOutput } from "../shapes/CreateJobOutput";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { BadRequestException } from "../shapes/BadRequestException";
import { IdempotencyException } from "../shapes/IdempotencyException";
import { InternalServiceException } from "../shapes/InternalServiceException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
