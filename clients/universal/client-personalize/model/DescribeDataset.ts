import { DescribeDatasetInput } from "./DescribeDatasetInput";
import { DescribeDatasetOutput } from "./DescribeDatasetOutput";
import { InvalidInputException } from "./InvalidInputException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DescribeDataset: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeDataset",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeDatasetInput
  },
  output: {
    shape: DescribeDatasetOutput
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
