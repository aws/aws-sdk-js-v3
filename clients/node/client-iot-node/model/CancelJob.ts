import { CancelJobInput } from "./CancelJobInput";
import { CancelJobOutput } from "./CancelJobOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ThrottlingException } from "./ThrottlingException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
