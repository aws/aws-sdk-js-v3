import { GetPendingJobExecutionsInput } from "../shapes/GetPendingJobExecutionsInput";
import { GetPendingJobExecutionsOutput } from "../shapes/GetPendingJobExecutionsOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { CertificateValidationException } from "../shapes/CertificateValidationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
