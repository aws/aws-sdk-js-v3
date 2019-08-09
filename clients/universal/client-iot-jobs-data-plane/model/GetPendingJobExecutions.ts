import { GetPendingJobExecutionsInput } from "./GetPendingJobExecutionsInput";
import { GetPendingJobExecutionsOutput } from "./GetPendingJobExecutionsOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ThrottlingException } from "./ThrottlingException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { CertificateValidationException } from "./CertificateValidationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetPendingJobExecutions: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetPendingJobExecutions",
  http: {
    method: "GET",
    requestUri: "/things/{thingName}/jobs"
  },
  input: {
    shape: GetPendingJobExecutionsInput
  },
  output: {
    shape: GetPendingJobExecutionsOutput
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
