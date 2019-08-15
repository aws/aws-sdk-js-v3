import { ListDeploymentJobsInput } from "../shapes/ListDeploymentJobsInput";
import { ListDeploymentJobsOutput } from "../shapes/ListDeploymentJobsOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { InternalServerException } from "../shapes/InternalServerException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
