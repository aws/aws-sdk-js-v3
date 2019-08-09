import { DescribeDatasetImportJobInput } from "./DescribeDatasetImportJobInput";
import { DescribeDatasetImportJobOutput } from "./DescribeDatasetImportJobOutput";
import { InvalidInputException } from "./InvalidInputException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
