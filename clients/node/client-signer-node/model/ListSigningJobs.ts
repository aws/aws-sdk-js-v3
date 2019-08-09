import { ListSigningJobsInput } from "./ListSigningJobsInput";
import { ListSigningJobsOutput } from "./ListSigningJobsOutput";
import { ValidationException } from "./ValidationException";
import { AccessDeniedException } from "./AccessDeniedException";
import { ThrottlingException } from "./ThrottlingException";
import { InternalServiceErrorException } from "./InternalServiceErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ListSigningJobs: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListSigningJobs",
  http: {
    method: "GET",
    requestUri: "/signing-jobs"
  },
  input: {
    shape: ListSigningJobsInput
  },
  output: {
    shape: ListSigningJobsOutput
  },
  errors: [
    {
      shape: ValidationException
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
