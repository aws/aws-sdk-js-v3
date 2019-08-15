import { DescribeDataSourcesInput } from "../shapes/DescribeDataSourcesInput";
import { DescribeDataSourcesOutput } from "../shapes/DescribeDataSourcesOutput";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { InternalServerException } from "../shapes/InternalServerException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeDataSources: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeDataSources",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeDataSourcesInput
  },
  output: {
    shape: DescribeDataSourcesOutput
  },
  errors: [
    {
      shape: InvalidInputException
    },
    {
      shape: InternalServerException
    }
  ]
};
