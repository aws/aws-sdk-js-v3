import { StartNextPendingJobExecutionInput } from "./StartNextPendingJobExecutionInput";
import { StartNextPendingJobExecutionOutput } from "./StartNextPendingJobExecutionOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ThrottlingException } from "./ThrottlingException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { CertificateValidationException } from "./CertificateValidationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
