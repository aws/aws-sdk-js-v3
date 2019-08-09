import { DescribeEcsClustersInput } from "./DescribeEcsClustersInput";
import { DescribeEcsClustersOutput } from "./DescribeEcsClustersOutput";
import { ValidationException } from "./ValidationException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
