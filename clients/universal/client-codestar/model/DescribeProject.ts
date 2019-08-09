import { DescribeProjectInput } from "./DescribeProjectInput";
import { DescribeProjectOutput } from "./DescribeProjectOutput";
import { ProjectNotFoundException } from "./ProjectNotFoundException";
import { ValidationException } from "./ValidationException";
import { InvalidServiceRoleException } from "./InvalidServiceRoleException";
import { ProjectConfigurationException } from "./ProjectConfigurationException";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
