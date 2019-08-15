import { DescribeEcsClustersInput } from "../shapes/DescribeEcsClustersInput";
import { DescribeEcsClustersOutput } from "../shapes/DescribeEcsClustersOutput";
import { ValidationException } from "../shapes/ValidationException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeEcsClusters: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeEcsClusters",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeEcsClustersInput
  },
  output: {
    shape: DescribeEcsClustersOutput
  },
  errors: [
    {
      shape: ValidationException
    },
    {
      shape: ResourceNotFoundException
    }
  ]
};
