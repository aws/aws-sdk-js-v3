import { UpdateJobExecutionInput } from "../shapes/UpdateJobExecutionInput";
import { UpdateJobExecutionOutput } from "../shapes/UpdateJobExecutionOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { CertificateValidationException } from "../shapes/CertificateValidationException";
import { InvalidStateTransitionException } from "../shapes/InvalidStateTransitionException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
