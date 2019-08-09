import { StartSigningJobInput } from "./StartSigningJobInput";
import { StartSigningJobOutput } from "./StartSigningJobOutput";
import { ValidationException } from "./ValidationException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { AccessDeniedException } from "./AccessDeniedException";
import { ThrottlingException } from "./ThrottlingException";
import { InternalServiceErrorException } from "./InternalServiceErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const StartSigningJob: _Operation_ = {
  metadata: ServiceMetadata,
  name: "StartSigningJob",
  http: {
    method: "POST",
    requestUri: "/signing-jobs"
  },
  input: {
    shape: StartSigningJobInput
  },
  output: {
    shape: StartSigningJobOutput
  },
  errors: [
    {
      shape: ValidationException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: AccessDeniedException
    },
    {
      shape: ThrottlingException
    },
    {
      shape: InternalServiceErrorException
    }
  ]
};
