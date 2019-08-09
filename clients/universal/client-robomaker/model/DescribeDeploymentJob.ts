import { DescribeDeploymentJobInput } from "./DescribeDeploymentJobInput";
import { DescribeDeploymentJobOutput } from "./DescribeDeploymentJobOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidParameterException } from "./InvalidParameterException";
import { InternalServerException } from "./InternalServerException";
import { ThrottlingException } from "./ThrottlingException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DescribeDeploymentJob: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeDeploymentJob",
  http: {
    method: "POST",
    requestUri: "/describeDeploymentJob"
  },
  input: {
    shape: DescribeDeploymentJobInput
  },
  output: {
    shape: DescribeDeploymentJobOutput
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
