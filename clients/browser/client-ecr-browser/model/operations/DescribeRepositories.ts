import { DescribeRepositoriesInput } from "../shapes/DescribeRepositoriesInput";
import { DescribeRepositoriesOutput } from "../shapes/DescribeRepositoriesOutput";
import { ServerException } from "../shapes/ServerException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { RepositoryNotFoundException } from "../shapes/RepositoryNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeRepositories: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeRepositories",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeRepositoriesInput
  },
  output: {
    shape: DescribeRepositoriesOutput
  },
  errors: [
    {
      shape: ServerException
    },
    {
      shape: InvalidParameterException
    },
    {
      shape: RepositoryNotFoundException
    }
  ]
};
