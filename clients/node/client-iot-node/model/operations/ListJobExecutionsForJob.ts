import { ListJobExecutionsForJobInput } from "../shapes/ListJobExecutionsForJobInput";
import { ListJobExecutionsForJobOutput } from "../shapes/ListJobExecutionsForJobOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListJobExecutionsForJob: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListJobExecutionsForJob",
  http: {
    method: "GET",
    requestUri: "/jobs/{jobId}/things"
  },
  input: {
    shape: ListJobExecutionsForJobInput
  },
  output: {
    shape: ListJobExecutionsForJobOutput
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
