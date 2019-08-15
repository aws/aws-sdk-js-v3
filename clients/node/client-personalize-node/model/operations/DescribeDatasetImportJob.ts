import { DescribeDatasetImportJobInput } from "../shapes/DescribeDatasetImportJobInput";
import { DescribeDatasetImportJobOutput } from "../shapes/DescribeDatasetImportJobOutput";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeDatasetImportJob: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeDatasetImportJob",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeDatasetImportJobInput
  },
  output: {
    shape: DescribeDatasetImportJobOutput
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
