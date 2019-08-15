import { DescribeQueriesInput } from "../shapes/DescribeQueriesInput";
import { DescribeQueriesOutput } from "../shapes/DescribeQueriesOutput";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
