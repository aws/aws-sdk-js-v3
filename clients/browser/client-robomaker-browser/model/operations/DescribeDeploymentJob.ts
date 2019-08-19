import { DescribeDeploymentJobInput } from "../shapes/DescribeDeploymentJobInput";
import { DescribeDeploymentJobOutput } from "../shapes/DescribeDeploymentJobOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { InternalServerException } from "../shapes/InternalServerException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
