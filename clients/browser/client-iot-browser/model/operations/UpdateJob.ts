import { UpdateJobInput } from "../shapes/UpdateJobInput";
import { UpdateJobOutput } from "../shapes/UpdateJobOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateJob: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateJob",
  http: {
    method: "PATCH",
    requestUri: "/jobs/{jobId}"
  },
  input: {
    shape: UpdateJobInput
  },
  output: {
    shape: UpdateJobOutput
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
