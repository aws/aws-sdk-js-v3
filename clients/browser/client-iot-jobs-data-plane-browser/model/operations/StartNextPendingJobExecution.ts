import { StartNextPendingJobExecutionInput } from "../shapes/StartNextPendingJobExecutionInput";
import { StartNextPendingJobExecutionOutput } from "../shapes/StartNextPendingJobExecutionOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { CertificateValidationException } from "../shapes/CertificateValidationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const StartNextPendingJobExecution: _Operation_ = {
  metadata: ServiceMetadata,
  name: "StartNextPendingJobExecution",
  http: {
    method: "PUT",
    requestUri: "/things/{thingName}/jobs/$next"
  },
  input: {
    shape: StartNextPendingJobExecutionInput
  },
  output: {
    shape: StartNextPendingJobExecutionOutput
  },
  errors: [
    {
      shape: InvalidRequestException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: ThrottlingException
    },
    {
      shape: ServiceUnavailableException
    },
    {
      shape: CertificateValidationException
    }
  ]
};
