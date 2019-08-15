import { CancelJobInput } from "../shapes/CancelJobInput";
import { CancelJobOutput } from "../shapes/CancelJobOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CancelJob: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CancelJob",
  http: {
    method: "PUT",
    requestUri: "/jobs/{jobId}/cancel"
  },
  input: {
    shape: CancelJobInput
  },
  output: {
    shape: CancelJobOutput
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
    }
  ]
};
