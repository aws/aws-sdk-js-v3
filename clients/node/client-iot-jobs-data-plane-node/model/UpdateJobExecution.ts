import { UpdateJobExecutionInput } from "./UpdateJobExecutionInput";
import { UpdateJobExecutionOutput } from "./UpdateJobExecutionOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ThrottlingException } from "./ThrottlingException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { CertificateValidationException } from "./CertificateValidationException";
import { InvalidStateTransitionException } from "./InvalidStateTransitionException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const UpdateJobExecution: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateJobExecution",
  http: {
    method: "POST",
    requestUri: "/things/{thingName}/jobs/{jobId}"
  },
  input: {
    shape: UpdateJobExecutionInput
  },
  output: {
    shape: UpdateJobExecutionOutput
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
    },
    {
      shape: InvalidStateTransitionException
    }
  ]
};
