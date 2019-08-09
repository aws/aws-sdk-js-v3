import { CreateJobInput } from "./CreateJobInput";
import { CreateJobOutput } from "./CreateJobOutput";
import { ValidationException } from "./ValidationException";
import { IncompatibleVersionException } from "./IncompatibleVersionException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { AccessDeniedException } from "./AccessDeniedException";
import { LimitExceededException } from "./LimitExceededException";
import { InternalServiceException } from "./InternalServiceException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const CreateJob: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateJob",
  http: {
    method: "POST",
    requestUri: "/2012-09-25/jobs"
  },
  input: {
    shape: CreateJobInput
  },
  output: {
    shape: CreateJobOutput
  },
  errors: [
    {
      shape: ValidationException
    },
    {
      shape: IncompatibleVersionException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: AccessDeniedException
    },
    {
      shape: LimitExceededException
    },
    {
      shape: InternalServiceException
    }
  ]
};
