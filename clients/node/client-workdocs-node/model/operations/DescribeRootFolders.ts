import { DescribeRootFoldersInput } from "../shapes/DescribeRootFoldersInput";
import { DescribeRootFoldersOutput } from "../shapes/DescribeRootFoldersOutput";
import { UnauthorizedOperationException } from "../shapes/UnauthorizedOperationException";
import { UnauthorizedResourceAccessException } from "../shapes/UnauthorizedResourceAccessException";
import { InvalidArgumentException } from "../shapes/InvalidArgumentException";
import { FailedDependencyException } from "../shapes/FailedDependencyException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeRootFolders: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeRootFolders",
  http: {
    method: "GET",
    requestUri: "/api/v1/me/root"
  },
  input: {
    shape: DescribeRootFoldersInput
  },
  output: {
    shape: DescribeRootFoldersOutput
  },
  errors: [
    {
      shape: UnauthorizedOperationException
    },
    {
      shape: UnauthorizedResourceAccessException
    },
    {
      shape: InvalidArgumentException
    },
    {
      shape: FailedDependencyException
    },
    {
      shape: ServiceUnavailableException
    }
  ]
};
