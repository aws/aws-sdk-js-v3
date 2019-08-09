import { DescribeRootFoldersInput } from "./DescribeRootFoldersInput";
import { DescribeRootFoldersOutput } from "./DescribeRootFoldersOutput";
import { UnauthorizedOperationException } from "./UnauthorizedOperationException";
import { UnauthorizedResourceAccessException } from "./UnauthorizedResourceAccessException";
import { InvalidArgumentException } from "./InvalidArgumentException";
import { FailedDependencyException } from "./FailedDependencyException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
