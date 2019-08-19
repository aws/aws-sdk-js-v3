import { DescribeProjectInput } from "../shapes/DescribeProjectInput";
import { DescribeProjectOutput } from "../shapes/DescribeProjectOutput";
import { ProjectNotFoundException } from "../shapes/ProjectNotFoundException";
import { ValidationException } from "../shapes/ValidationException";
import { InvalidServiceRoleException } from "../shapes/InvalidServiceRoleException";
import { ProjectConfigurationException } from "../shapes/ProjectConfigurationException";
import { ConcurrentModificationException } from "../shapes/ConcurrentModificationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeProject: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeProject",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeProjectInput
  },
  output: {
    shape: DescribeProjectOutput
  },
  errors: [
    {
      shape: ProjectNotFoundException
    },
    {
      shape: ValidationException
    },
    {
      shape: InvalidServiceRoleException
    },
    {
      shape: ProjectConfigurationException
    },
    {
      shape: ConcurrentModificationException
    }
  ]
};
