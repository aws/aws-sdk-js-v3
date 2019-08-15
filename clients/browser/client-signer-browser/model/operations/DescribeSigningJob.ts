import { DescribeSigningJobInput } from "../shapes/DescribeSigningJobInput";
import { DescribeSigningJobOutput } from "../shapes/DescribeSigningJobOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { AccessDeniedException } from "../shapes/AccessDeniedException";
import { InternalServiceErrorException } from "../shapes/InternalServiceErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
