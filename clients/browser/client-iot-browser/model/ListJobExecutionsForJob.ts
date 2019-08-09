import { ListJobExecutionsForJobInput } from "./ListJobExecutionsForJobInput";
import { ListJobExecutionsForJobOutput } from "./ListJobExecutionsForJobOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ThrottlingException } from "./ThrottlingException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
