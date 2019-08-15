import { StartSigningJobInput } from "../shapes/StartSigningJobInput";
import { StartSigningJobOutput } from "../shapes/StartSigningJobOutput";
import { ValidationException } from "../shapes/ValidationException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { AccessDeniedException } from "../shapes/AccessDeniedException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { InternalServiceErrorException } from "../shapes/InternalServiceErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
