import { DescribeQueriesInput } from "./DescribeQueriesInput";
import { DescribeQueriesOutput } from "./DescribeQueriesOutput";
import { InvalidParameterException } from "./InvalidParameterException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DescribeQueries: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeQueries",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeQueriesInput
  },
  output: {
    shape: DescribeQueriesOutput
  },
  errors: [
    {
      shape: InvalidParameterException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: ServiceUnavailableException
    }
  ]
};
