import { DescribeSigningJobInput } from "./DescribeSigningJobInput";
import { DescribeSigningJobOutput } from "./DescribeSigningJobOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { AccessDeniedException } from "./AccessDeniedException";
import { InternalServiceErrorException } from "./InternalServiceErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DescribeSigningJob: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeSigningJob",
  http: {
    method: "GET",
    requestUri: "/signing-jobs/{jobId}"
  },
  input: {
    shape: DescribeSigningJobInput
  },
  output: {
    shape: DescribeSigningJobOutput
  },
  errors: [
    {
      shape: ResourceNotFoundException
    },
    {
      shape: AccessDeniedException
    },
    {
      shape: InternalServiceErrorException
    }
  ]
};
