import { ListDeploymentJobsInput } from "./ListDeploymentJobsInput";
import { ListDeploymentJobsOutput } from "./ListDeploymentJobsOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidParameterException } from "./InvalidParameterException";
import { InternalServerException } from "./InternalServerException";
import { ThrottlingException } from "./ThrottlingException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ListDeploymentJobs: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListDeploymentJobs",
  http: {
    method: "POST",
    requestUri: "/listDeploymentJobs"
  },
  input: {
    shape: ListDeploymentJobsInput
  },
  output: {
    shape: ListDeploymentJobsOutput
  },
  errors: [
    {
      shape: ResourceNotFoundException
    },
    {
      shape: InvalidParameterException
    },
    {
      shape: InternalServerException
    },
    {
      shape: ThrottlingException
    }
  ]
};
