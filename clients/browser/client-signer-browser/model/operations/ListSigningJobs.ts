import { ListSigningJobsInput } from "../shapes/ListSigningJobsInput";
import { ListSigningJobsOutput } from "../shapes/ListSigningJobsOutput";
import { ValidationException } from "../shapes/ValidationException";
import { AccessDeniedException } from "../shapes/AccessDeniedException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { InternalServiceErrorException } from "../shapes/InternalServiceErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
