import { DescribeDatasetGroupInput } from "../shapes/DescribeDatasetGroupInput";
import { DescribeDatasetGroupOutput } from "../shapes/DescribeDatasetGroupOutput";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeDatasetGroup: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeDatasetGroup",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeDatasetGroupInput
  },
  output: {
    shape: DescribeDatasetGroupOutput
  },
  errors: [
    {
      shape: InvalidInputException
    },
    {
      shape: ResourceNotFoundException
    }
  ]
};
