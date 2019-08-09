import { DescribeRepositoriesInput } from "./DescribeRepositoriesInput";
import { DescribeRepositoriesOutput } from "./DescribeRepositoriesOutput";
import { ServerException } from "./ServerException";
import { InvalidParameterException } from "./InvalidParameterException";
import { RepositoryNotFoundException } from "./RepositoryNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
