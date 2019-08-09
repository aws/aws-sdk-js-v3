import { DescribeWorkspaceDirectoriesInput } from "./DescribeWorkspaceDirectoriesInput";
import { DescribeWorkspaceDirectoriesOutput } from "./DescribeWorkspaceDirectoriesOutput";
import { InvalidParameterValuesException } from "./InvalidParameterValuesException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DescribeWorkspaceDirectories: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeWorkspaceDirectories",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeWorkspaceDirectoriesInput
  },
  output: {
    shape: DescribeWorkspaceDirectoriesOutput
  },
  errors: [
    {
      shape: InvalidParameterValuesException
    }
  ]
};
